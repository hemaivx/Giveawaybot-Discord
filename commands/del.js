const ms = require("ms"); 
const fs = require("fs"); 
const loggiveaway = JSON.parse(fs.readFileSync('./db/loggiveaway.json', 'utf8'));
const Discord = require("discord.js");
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}
exports.run = (client, message, args) => {

if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('**:x: You need to have the manage messages permissions to end giveaways.**');
    }

    if(!args[0]){
        return message.channel.send('**:x: You have to specify a valid message ID!**');
    }

        let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("**✅ | Success ! Giveaway deleted!**").then(msg => msg.delete(6000))
        }).catch((err) => {
            message.channel.send("**❌ | Oh no ! giveaway found for "+messageID+", please check and try again**");
        });

/*var log = JSON.parse(fs.readFileSync(`./db/loggiveaway.json`, `UTF8`));

 
  const x =  message.guild.channels.find(mk => mk.name === log[message.guild.id].channel);
                      if(!x) return;
                      let d = new Discord.RichEmbed()
                          .setAuthor('Delete Giveaway')
                          .addField('Delete By', `<@${message.author.id}>`, true)
                          .setThumbnail(message.author.avatarURL)
                          .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
                          .setTimestamp();

x.send(d)*/
 

    }
