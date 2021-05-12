import { Client, Message } from 'discord.js';

const { TOKEN } = process.env;

const client: Client = new Client();

client.on('ready', () => console.log(`Logged in as ${client.user?.tag}!`));

client.on('message', (message: Message): void => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client
  .login(TOKEN)
  .then((): void => console.log('🚀 Bot started'))
  .catch((error: Error): void => console.error(error.message));
