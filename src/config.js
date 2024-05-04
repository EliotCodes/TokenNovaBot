require('dotenv').config()


module.exports = {
    adminUsername: "EliotCodes", // don't add the @ symbol
    BOT_TOKEN: process.env.BOT_TOKEN,
    API_KEY: process.env.API_KEY,
    botMode: "polling", // You can use either "polling" or "webhook", webhook is recommended in production
    webhookDomain: "https://yourdomain.com",
    webhookPort: 7000
}