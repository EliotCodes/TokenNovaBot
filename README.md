### Token Nova Documentation

**Introduction**

Token Nova is a Telegram bot designed to provide real-time cryptocurrency prices. It utilizes the CoinMarketCap API to fetch accurate pricing data.

---

**Getting Started**

To run Token Nova bot on your machine, follow these steps:

1. Clone the Token Nova repository to your local machine:

    ```bash
    git clone https://github.com/EliotCodes/TokenNova.git
    ```

2. Install the necessary dependencies:

    ```bash
    cd TokenNova
    npm install
    ```

3. Create a bot on Telegram using [BotFather](https://t.me/BotFather) and obtain your bot token.

4. Set the bot token in the `.env.example` file.

5. Obtain your CoinMarketCap API key from [here](https://coinmarketcap.com/api/).

6. Set the API key in the `.env.example` file.

7. Rename the `.env.example` file to `.env`.

8. Start the bot:

    ```bash
    node index.js
    ```

---

**Configuration**

You can configure the behavior of the bot using the `config.js` file located in the `src` folder.

Example `config.js` file:

```js
module.exports = {
    adminUsername: "EliotCodes", 
    BOT_TOKEN: "",
    API_KEY: "",
    botMode: "polling", 
    webhookDomain: "https://yourdomain.com",
    webhookPort: 3000
}
```

The `botMode` can be either "polling" or "webhook," with "webhook" recommended for production environments. 

For `webhook` mode, set your `webhookDomain` to your bot's hosting domain and `webhookPort` to the desired port.

---

**Usage**

After setting up the bot, access the bot you created with [BotFather](https://t.me/BotFather) on Telegram and send the command `/start` to view available commands and start using Token Nova to get real-time cryptocurrency prices.


---

**Demo**

You can test the functionality of Token Nova by accessing the [Token Nova Bot](https://t.me/TokenNovaBot) on Telegram. Send the `/start` command to begin using the bot and explore its features for retrieving cryptocurrency prices in real-time.