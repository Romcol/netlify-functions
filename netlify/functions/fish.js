import {filterFish, fishData} from "./utils.js";

exports.handler = async function (event, context) {
    const input = event.queryStringParameters.q;
    if(!input) {
        return {
            statusCode: 404,
            body: JSON.stringify(fishData),
            headers: {
                "access-control-allow-origin": "*",
            },
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(filterFish(input)),
        headers: {
            "access-control-allow-origin": "*",
        },
    };
}