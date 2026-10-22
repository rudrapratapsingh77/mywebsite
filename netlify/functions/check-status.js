exports.handler = async (event, context) => {
    const headers = { "Access-Control-Allow-Origin": "*" };
    const orderId = event.queryStringParameters.order_id;
    
    if (!orderId) return { statusCode: 400, headers, body: JSON.stringify({ error: "No order id" }) };

    try {
        const API_KEY = "fam_live_e4a8bc642b4cffb15a0d008731404f1f954f";
        const response = await fetch(`https://trustgateway.in/api/v1/orders/status/${orderId}`, {
            method: 'GET',
            headers: { 'X-API-Key': API_KEY }
        });
        
        const responseText = await response.text();
        return { statusCode: 200, headers, body: responseText }; // Raw text bhej rahe hain frontend ko
    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
