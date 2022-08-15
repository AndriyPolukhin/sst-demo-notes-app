import { Bucket, Table } from '@serverless-stack/resources'

export function StorageStack({ stack, app }) {
	// Create an S3 bucket
	const bucket = new Bucket(stack, 'Uploads')

	// Create the Dynamo Table
	const table = new Table(stack, 'Notes', {
		// Set fields to store the data
		fields: {
			userId: 'string',
			noteId: 'string'
		},
		// Set indexes to query the data
		primaryIndex: { partitionKey: 'userId', sortKey: 'noteId' }
	})

	// Publicly returning the created table
	return {
		table,
		bucket
	}
}
