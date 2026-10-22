exports.handler = async (event, context) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
    };

    const orderId = event.queryStringParameters.order_id;
    if (!orderId) return { statusCode: 400, headers, body: JSON.stringify({ error: "No order id" }) };

    try {
        const API_KEY = "fam_live_e4a8bc642b4cffb15a0d008731404f1f954f";
        const response = await fetch(`https://trustgateway.in/api/v1/orders/status/${orderId}`, {
            headers: { 'X-API-Key': API_KEY }
        });
        const data = await response.json();
        return { statusCode: 200, headers, body: JSON.stringify(data) };
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
