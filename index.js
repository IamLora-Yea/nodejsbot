const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('로그 준비 완료');
  client.user.setPresence({ game: { name: '/스페이스봇 도움'}, status: 'online' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "4×1080m³, 1053kg, 2.72548K 집합체"));
});

client.on('message', message => {
  if (message.content === '/스페이스봇 소개') {
    message.channel.send('안녕하세요! 저는 스페이스봇이라고 합니다!')
  }

  if (message.content === '/스페이스봇 도움') {
    message.channel.send('/스페이스봇 소개 - 스페이스봇을 소개해줍니다')
    message.channel.send('/스페이스봇 초대링크 - 스페이스봇을 초대하는 링크를 제공합니다')
  }

  if (message.content === '/스페이스봇 초대링크') {
    message.channel.send('초대링크: https://bit.ly/2Vd8dUS')
  }
});

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

client.login(token);
