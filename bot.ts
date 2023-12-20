import { Telegraf, Context } from 'telegraf';
import * as jwt from 'jsonwebtoken';

const bot = new Telegraf('<YOUR_TOKEN>');

bot.command('start', (ctx: Context) => {
  if (ctx.from) {
    const userId = ctx.from.id;

    const token = jwt.sign({ userId }, '<RANDOM>', { expiresIn: '24h' });

    ctx.reply(`Here is your JWT token: ${token}`);
  } else {
    ctx.reply('Unable to retrieve user information.');
  }
});

bot.launch().then(() => {
  console.log('Bot is running!');
});
