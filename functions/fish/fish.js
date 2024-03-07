import { filterFishPaginated } from "./utils.js";

exports.handler = async function (event, context) {
    const input = event.queryStringParameters.q;
    // Convert 'limit' and 'page' parameters to integers
    const limit = parseInt(event.queryStringParameters.limit, 10);
    const page = parseInt(event.queryStringParameters.page, 10);

    const { data, total } = filterFishPaginated(input, limit, page);
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            "access-control-allow-origin": "*",
            "Access-Control-Expose-Headers": "x-total-count",
            "x-total-count": total.toString(),
        },
    };
}