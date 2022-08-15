import handler from '../util/handler'
import dynamoDb from '../util/dynamodb'

export const main = handler(async (event) => {
	const params = {
		TableName: process.env.TABLE_NAME,
		// KeyConditionExpression' defines the condition for the query
		// - 'userId = :userId' only return items with matching 'userId'
		// Partition key
		KeyConditionExpression: 'userId = :userId',
		// ExpressionAttributesValues" defines the value in the condition
		// - ':userId': defines "userId" to be the id of the author
		ExpressionAttributeValues: {
			':userId': event.requestContext.authorizer.iam.cognitoIdentity.identityId
		}
	}

	const result = await dynamoDb.query(params)

	// Return the matching list of items in reponse body
	return result.Items
})
