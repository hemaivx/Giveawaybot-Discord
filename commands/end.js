const ms = require("ms"); 
const fs = require("fs"); 
const config = require("../db/config.json");
const loggiveaway = JSON.parse(fs.readFileSync('./db/loggiveaway.json', 'utf8'));
const Discord = require("discord.js");
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}
exports.run = async (client, message, args) => {

if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('**:x: You need to have the manage messages permissions to end giveaways.**');
    }

    if(!args[0]){
        return message.channel.send('**:x: You have to specify a valid message ID!**');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel('**Unable to find a giveaway for** `'+args.join(' ')+'`');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
  
    .then(() => {
        message.channel.send('**Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...**');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('**This giveaway is not ended!**');
        } else {
            console.error(e);
            message.channel.send('**An error occured...**');
        }
    });

/* client.giveawaysManager.on('end', (giveaway, winners) => {
       winners.forEach((member) => {
       let winDM = new Discord.RichEmbed()
                          .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
            .setDescription(`**🎉 Congratulations 🎉\nYou won: ${giveaway.prize}\nGo to giveaway\n[Click on the emoji](https://discord.gg/XmWF7DM)**\n[💬](https://discordapp.com/channels/${message.guild.id}/${giveaway.channelID}/${giveaway.messageID})`)
            member.send(winDM)
        
}); 

});*/



};