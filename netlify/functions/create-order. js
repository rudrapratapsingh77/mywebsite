exports.handler = async (event, context) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    if (event.httpMethod === "OPTIONS") {
        return { statusCode: 200, headers, body: "OK" };
    }

    try {
        if (!event.body) throw new Error("No body");
        const { amount, userId, email, redirectUrl } = JSON.parse(event.body);
        const API_KEY = "fam_live_e4a8bc642b4cffb15a0d008731404f1f954f"; 

        const response = await fetch("https://trustgateway.in/api/v1/orders/create", {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify({
                amount: amount,
                note: `Deposit for ${email}`,
                redirect_url: redirectUrl
            })
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            throw new Error(`Invalid JSON (Status ${response.status})`);
        }

        return { statusCode: 200, headers, body: JSON.stringify(data) };

    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, message: error.message })
        };
    }
};
