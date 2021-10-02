"use strict";

module.exports.endpoint = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Welcome to Serverless Example Project with CI",
            },
            null,
            2
        ),
    };
};
