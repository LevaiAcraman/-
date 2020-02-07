const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("674344875977867264")
setInterval(function() {
channel.send(`HELLO HOW ARE        YOU   hello how are     you Hello How Are You   السلام عليكم ورحمة الله وبركاته`);
}, 30)
})

client.login(process.env.BOT_TOKEN);