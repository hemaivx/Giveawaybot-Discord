   const Discord = require("discord.js");
const giveaways = require('discord-giveaways');
const ms = require("ms");
const config = require("../plus.json");

module.exports.run = async (client, message, args) => {  


if(message.author.bot) return;
        if(message.channel.type === 'dm') return;         

/*let allGiveaways = client.giveawaysManager.giveaways.length; 

    let onServer = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).filter((g) => !g.ended).length;
    let ened = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).filter((g) => g.ended).length;

let notEnded1 = client.giveawaysManager.giveaways.filter((g) => !g.ended).length;
let Ended = client.giveawaysManager.giveaways.filter((g) => g.ended).length;

  //   let notEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).map((g) => `\nPrize: ${g.prize} \nLink Giveaway: https://discordapp.com/channels/${message.guild.id}/${g.channelID}/${g.messageID} \nWinners: ${g.winnerCount} `).join('\n')
    let _top = 1;*/
 //let notEnded111 = client.giveawaysManager.giveaways.filter((g) => !g.ended).filter((g) => g.guildID === message.guild.id).map((g) => `\nPrize: ${g.prize} \nLink Giveaway: https://discordapp.com/channels/${message.guild.id}/${g.channelID}/${g.messageID} \nWinners: ${g.winnerCount} `).join('\n')




let allGiveaways = client.giveawaysManager.giveaways.length; 

    let onServer = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).filter((g) => !g.ended).length;

let notEnded = client.giveawaysManager.giveaways.filter((g) => !g.ended).length;

let Ended = client.giveawaysManager.giveaways.filter((g) => g.ended).length;

    let gnotEnded = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).filter((g) => !g.ended).length;

    let gEnded = client.giveawaysManager.giveaways.filter((i) => message.guild.channels.has(i.channelID)).filter((g) => g.ended).length;


const embed = new Discord.RichEmbed()
.setTitle("Statistics Giveaways")
.addField("Server Total Giveaways", `» There have been ${onServer} giveaways on this server`)
.addField("Server Total Giveaways not ended", `» There have been ${gnotEnded} giveaways that are not currently finished on this server `)
.addField("Server Total Giveaways ended", `» There have been ${gEnded} giveaways that are currently finished on this server `)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
message.channel.send(embed)
}