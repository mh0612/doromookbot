const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('bot on.');
});

client.on('message', (message) => {
  if(message.content === '야 노예야') {
    message.reply('네 주인님');
  }
  if(message.content ===  '이봐 왜 이렇게 죽상이야') {
    message.channel.send('주인 새끼가 꼴받게 하잖아')
  }
  if(message.content === '디스코드 봇') {
    message.send('디스코드 봇이 꼴받게 하잖아');
  }
  if(message.content === '롤 하자!!!') {
    message.channel.send('<@&523794801771151360> 야 롤 하자');
  }
  if(message.content === '도로묵 바보') {
    message.channel.send('<@&523794801771151360> 주인님 바보래요');
  }
  if(message.content === '도로묵 소환술') {
    message.channel.send('<@&523794801771151360> 펑!');
  }
});




client.login(token);