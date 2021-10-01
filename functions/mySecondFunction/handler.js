"use strict";

module.exports.endpoint = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Welcome to my second function",
            },
            null,
            2
        ),
    };
};
