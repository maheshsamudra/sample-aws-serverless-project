// import core
const middy = require('middy') // commonjs Node v12+

// import some middlewares
const { jsonBodyParser, validator, httpErrorHandler } = require('middy/middlewares')

// This is your common handler, in no way different than what you are used to doing every day in AWS Lambda
const handler = async (event, context) => {
    // we don't need to deserialize the body ourself as a middleware will be used to do that
    const { name, email } = event.body

    // save data in the database
    // ...

    const response = { result: 'success', message: 'Saved name and email.'}
    return {statusCode: 200, body: JSON.stringify(response)}
}


// Notice that in the handler you only added base business logic
// Validation is handled by the middy middlewares


// For the example, I'm using basic validations.
// More validation methods are available at https://middy.js.org/packages/validator/
const inputSchema = {
    type: 'object',
    properties: {
        body: {
            type: 'object',
            properties: {
                name: { type: 'string', minLength: 2 },
                email: { type: 'string', minimum: 5},
            },
            required: ['name', 'email']
        }
    }
}

// Adding middlewares from middy.
const endpoint = middy(handler)
    .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
    .use(validator({inputSchema})) // validates the input
    .use(httpErrorHandler()) // handles common http errors and returns proper responses

module.exports = { endpoint }