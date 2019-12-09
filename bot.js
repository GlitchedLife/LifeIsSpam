const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("653688619365826614")
setInterval(function() {
channel.send(`3bkeer 3Bkeer 5Bkeer 6Bkerr`);
}, 30)
})

client.login(process.env.BOT_TOKEN);