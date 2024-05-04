const { Telegraf } = require('telegraf');
const config = require('./src/config');

const bot = new Telegraf(config.BOT_TOKEN);

// Commands and actions
const startCommand = require('./src/commands/startCommand');
const convertCommand = require('./src/commands/convertCommand');
const helpCallback = require('./src/callbacks/helpCallback');

bot.command('start', startCommand);
bot.command('c', convertCommand);
bot.command('help', helpCallback);
bot.action('help', helpCallback);
bot.action('back', startCommand);

// Launching the bot
if (config.botMode === 'webhook') {
    bot.launch({
        webhook: {
            domain: config.webhookDomain,
            port: config.webhookPort
        }
    });
    console.log('Bot is currently running in webhook mode, webhook domain: ' + config.webhookDomain + ':' + config.webhookPort);
} else {
    bot.launch();
    console.log('Bot is currently running in polling mode');
}
