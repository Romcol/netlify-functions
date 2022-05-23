import {filterFish, fishData} from "./utils.js";

exports.handler = async function (event, context) {
    const input = event.queryStringParameters.q;
    return {
        statusCode: 200,
        body: JSON.stringify(input ? filterFish(input) : fishData),
        headers: {
            "access-control-allow-origin": "*",
        },
    };
}