import { filterFishPaginated } from "./utils.js";

exports.handler = async function (event, context) {
    const input = event.queryStringParameters.q;
    const limit = event.queryStringParameters.limit;
    const page = event.queryStringParameters.page;
    const { data, total } = filterFishPaginated(input, limit, page);
    return {
        statusCode: 200,
        body: JSON.stringify(data),
        headers: {
            "access-control-allow-origin": "*",
            "x-total-count": total,
        },
    };
}