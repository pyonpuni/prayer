const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1170948236769493052')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('ドクドク呑み込んで')
    .setName('maso')
    .setDetails(`།𓎟𓎟𓎟†𓎟𓎟𓎟།`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1011444419838353429/1196996721251729408/Untitled558_20240115161249_10.gif?ex=65b9a911&is=65a73411&hm=cf2a3089fe8353686d037fd88c2a6b722f544e0932cda804e5f656b0e4ccf0d9&') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1011444419838353429/1196996721666953216/IMG_4059_2.gif?ex=65b9a911&is=65a73411&hm=f05ed2f7c47f2fdc38a8717e9afb294d265d74e13f3d5930d73b52e0e298597d&')
    .setAssetsLargeText('無いの？もっと	') //Text when you hover the Large image
    .addButton('♡', 'https://rentry.co/idoljoshi')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `།𓎟𓎟𓎟†𓎟𓎟𓎟།`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);