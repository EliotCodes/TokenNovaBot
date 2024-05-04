const helpCallback = (ctx) => {
  const textContent = `Here's how you can use me:
    - Use the command <code>/c [from] [to] [amount]</code> to check the price of a cryptocurrency.
      For example: <code>/c BTC USD 2</code>
      

<b> NOTE:</b> [from] has to be a valid cryptocurrency symbol (e.g. BTC, ETH, etc.) and [to] has to be a valid fiat currency symbol (e.g. USD, EUR, etc.)`;

  const keyboardContent = {
    reply_markup: {
      inline_keyboard: [[{ text: "🔙 Back", callback_data: "back" }]],
    },
  };

  if (ctx.callbackQuery) {
    ctx.editMessageText(textContent, keyboardContent);
  } else {
    ctx.replyWithHTML(textContent, keyboardContent);
  }
};


module.exports = helpCallback;
