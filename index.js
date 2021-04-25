const Discord = require("discord.js")
const keepAlive = require("./server")
const client = new Discord.Client();
const cron = require('cron');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function reminder() {

  let scheduledMessage = new cron.CronJob('0 0 14 * * 5', () => {
 
  let guild = client.guilds.cache.get('755496572065939607');
  let channel = guild.channels.cache.get('755498946180284537');
  channel.send('Trevlig helg allihoppa och glöm inte loggböckerna!');
});
  
}





client.on('message', msg => {
  if (msg.content === '!commands') {
    msg.reply('```\n!lärarmail - listar mailadressen till alla lärare\n!annasinfo - listar kontaktuppgifter till Anna Sevon\n!deadlines - listar aktuella deadlines\n!zoom - listar Zoom-länken!\n!klassmöte - listar nästa inbokade klassmöte!\n!tenta - listar datum för nästkommande tentamen!\n!github - länkar till lärarnas github repo```');
  }
});

client.on('message', msg => {
  if (msg.content === '!github') {
    msg.reply('```\nhttps://github.com/bluepeak-orfu2020```');
  }
});

client.on('message', msg => {
  if (msg.content === '!klassmöte') {
    msg.reply('```\nNästa inbokade klassmöte äger preliminärt rum den Måndag 22/3!```');
  }
});

client.on('message', msg => {
  if (msg.content === '!tenta') {
    msg.reply('```\nNästa inbokade tentamen äger rum Torsdag 15/4!```');
  }
});

client.on('message', msg => {
  if (msg.content === '!zoom') {
    msg.reply('https://skys.zoom.us/j/81683875314?pwd=Um1vdFgxaGV6cXlsWlJlM21HR2xCUT09');
  }
});

client.on('message', msg => {
  if (msg.content === '!lärarmail') {
    msg.reply('\```Joels mail: joel.grabo@nexergroup.com\nLinus mail: linus.ivarsson@nexergroup.com\nEriks mail: erik.stenbacka@nexergroup.com\nHenrics mail: henric.edwards@nexergroup.com```');
  }
});

client.on('message', msg => {
  if (msg.content === '!annasinfo') {
    msg.reply('```\nAnnas mobilnummer: 070-594 93 00\nAnnas Mail: Anna.Sevon@bluepeak.se```');
  }
});

client.on('message', msg => {
  if (msg.content === '!deadlines') {
    msg.reply('```Inga deadlines just nu!.```');
  }
});



keepAlive()
reminder()
client.login(process.env.TOKEN)