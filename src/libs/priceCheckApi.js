const axios = require("axios");
const config = require("../config");

const convertCoin = async (from, to = "USD", amount = 1) => {
  try {
    from = from.toUpperCase();
    to = to.toUpperCase();
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${from}&convert=${to}&CMC_PRO_API_KEY=${config.API_KEY}`;

    const { data } = await axios.get(url);
    const { price, percent_change_24h } = data.data[from].quote[to];

    const newPrice = price * amount;

    return { price, percent_change_24h, newPrice, mode: "success", slug: data.data[from].slug };
  } catch (error) {
    console.error(error);
    return { price: 0, percent_change_24h: 0, mode: "error" };
  }
};


module.exports = { convertCoin };
