import {filterFish} from "./utils.js";

exports.handler = async function (event, context) {
    const input = event.queryStringParameters.q;
    if(!input) {
        return {
            statusCode: 404,
            body: null,
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify(filterFish(input)),
    };
}