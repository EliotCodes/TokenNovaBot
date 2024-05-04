const config = require("../config");
const startCommand = (ctx) => {
  const textContent =
    "Hello, <b>" +
    ctx.from.first_name +
    "</b>!\n I can check the price of crypto currencies.\n\n Use: <code>/c [from] [to] [amount]</code> \n E.g <code>/c BTC USD 2</code> \n\n Type /help to see what I can do.";

  const keyboardContent = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Help", callback_data: "help" },
          { text: "Bot Admin", url: "t.me/" + config.adminUsername },
        ],
        [
          {
            text: "➕ Add me to a group",
            url: "https://t.me/" + ctx.botInfo.username + "?startgroup=start",
          },
        ],
      ],
    },
    parse_mode: "HTML"
  };

  if (ctx.callbackQuery) {
    ctx.editMessageText(textContent, keyboardContent);
  } else {
    ctx.replyWithHTML(textContent, keyboardContent);
  }
};
module.exports = startCommand;
