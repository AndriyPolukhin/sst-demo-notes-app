// Api to create a note

import { Api, use } from '@serverless-stack/resources'
import { StorageStack } from './StorageStack'

export function ApiStack({ stack, app }) {
	// Sharing a storage Stack between stacks
	const { table } = use(StorageStack)

	// Create the API
	const api = new Api(stack, 'Api', {
		defaults: {
			authorizer: 'iam',
			function: {
				permissions: [table], // give persmission to access the table
				environment: {
					TABLE_NAME: table.tableName, // passing the name to make queries
					STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
				}
			}
		},
		routes: {
			'POST /notes': 'functions/create.main',
			'GET /notes/{id}': 'functions/get.main',
			'GET /notes': 'functions/list.main',
			'PUT /notes/{id}': 'functions/update.main',
			'DELETE /notes/{id}': 'functions/delete.main'
		}
	})

	// Show the API endpoint in the output, a url for requests
	stack.addOutputs({
		ApiEndpoint: api.url
	})

	// Return the API resource. :ublic access
	return {
		api
	}
}
