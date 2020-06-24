const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('로그 준비 완료');
});

client.on('message', message => {
  if (message.content === '/스페이스봇 소개') {
    message.channel.send('안녕하세요! 저는 스페이스봇이라고 합니다!')
  }

  if (message.content === '/스페이스봇 도움') {
    message.channel.send('/스페이스봇 소개 - 스페이스봇을 소개해줍니다');
  }
});

client.login('NzI0OTUwMzk4ODg4MTgxODQx.XvHtcA.sCGoSklyar4hGHv5R6O36Dh192Y');
