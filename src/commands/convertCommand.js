const priceAPI = require('../libs/priceCheckApi');
const utils = require('../libs/utils');

const convertCommand = async (ctx) => {
    const [from, to = 'USD', amount = 1] = ctx.args;

    if (!from) {
        ctx.replyWithHTML("Please use this format:\n <code>/c [from] [to] [amount]</code>\n\n<b>E.g</b> <code>/c BTC USD 2</code>");
        return;
    }

    try {
        const { price, percent_change_24h, newPrice, mode, slug } = await priceAPI.convertCoin(from, to, amount);

        if (mode === "success") {
ctx.replyWithHTML(
    `🪙 <code>${amount} ${utils.capitalizeFirstLetter(slug)} to ${to.toUpperCase()}</code>\n\n` +
    `📌 Price: ${newPrice.toFixed(10)}<b> ${to.toUpperCase()}</b>\n` +
    `📊 Change in the last 24h: ${percent_change_24h}%\n`,
    {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "CoinGecko ↗️", url: "https://www.coingecko.com/en/coins/" + slug },
                    { text: "CoinMarketCap ↗️", url: "https://coinmarketcap.com/currencies/" + slug }
                ],
                [
                    { text: "🔗 Share ("+from.toUpperCase()+") Value to Friends", url: `t.me/share/url?url= 📢 ${amount} ${utils.capitalizeFirstLetter(slug)}(${from.toUpperCase()}) to ${to.toUpperCase()} is equivalent to \`${newPrice} ${to.toUpperCase()}\` \n\n I was able to check this using @${ctx.botInfo.username}` }
                ]
            ]
        }
    }
);


        } else {
            throw new Error("Something went wrong. Please try again later.");
        }
    } catch (error) {
        ctx.replyWithHTML("<b>Sorry! The currency you entered is invalid or unavailable.</b>");
    }
};

module.exports = convertCommand;
 