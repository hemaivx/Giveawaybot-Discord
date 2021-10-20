   const ms = require("ms"); 
const fs = require("fs"); 
const config = require("../db/config.json");
const Discord = require("discord.js");
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}
exports.run = (client, message, args) => {
  let x = args.join(" ")
    var args = message.content.toLowerCase().split(" "); 
    var filter = m => m.author.id === message.author.id;
let Nigaa = new Discord.RichEmbed()
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
       .setDescription(`**
       <:winners:677646040723226624> |To change Winners Count Givaway
        <:prize:677646163796688926> | To change Prize Givaway
       **`)
        message.channel.send(Nigaa).then(b => {
            b.react('677646040723226624')
            .then(() => b.react('677646040723226624'))
            .then(() =>b.react('677646163796688926'))
            let reaction2Filter = (reaction, user) => reaction.emoji.name === 'winners' && user.id === message.author.id;
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'prize' && user.id === message.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
    var prize = '';
  var messageID = '';
  let embed = new Discord.RichEmbed()
.setDescription(`**Pleas Put the ID message of Giveaway**`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)


  let embed1 = new Discord.RichEmbed()

.setDescription(`**Pleas Put the new Prize **`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)

  let embed34 = new Discord.RichEmbed()

.setDescription(`**Done**`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
                            b.delete();

  message.channel.send(embed).then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {
                messageID = collected.first().content;
                collected.first().delete();
 if(isNaN(messageID))return message.reply(`**This not ID message**`).then(msg => msg.delete(6000))
                msgS.edit(embed1).then(msgS => {
                              message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {
                        prize = collected.first().content;
                        collected.first().delete();
msgS.edit(embed34)
msgS.delete(6000);
        client.giveawaysManager.edit(messageID, {
               newPrize: prize,

                        
 }).then(() => {
            message.channel.send("**Success! Giveaway will updated in less than "+(client.giveawaysManager.options.updateCountdownEvery/1000)+" seconds.**").then(msg => msg.delete(6000))
        }).catch((err) => {
            message.channel.send("**No giveaway found for "+messageID+", please check and try again**").then(msg => msg.delete(6000))
        });
    })
})
})
})
    })
    reaction2.on("collect", r => {
  var win = '';
  var messageID = '';
  let embed = new Discord.RichEmbed()
.setDescription(`**Pleas Put the ID message of Giveaway**`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)


  let embed1 = new Discord.RichEmbed()

.setDescription(`**Pleas Put the new Winners Count**`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)

 let embed34 = new Discord.RichEmbed()

.setDescription(`**Done**`)
.setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
                            b.delete();
  message.channel.send(embed).then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {
                messageID = collected.first().content;
                collected.first().delete();
 if(isNaN(messageID))return message.reply(`**This not ID message**`).then(msg => msg.delete(6000))
                msgS.edit(embed1).then(msgS => {
                              message.channel.awaitMessages(filter, { max: 1, time: 80000, errors: ['time'] }).then(collected => {
                        win = collected.first().content;
                        collected.first().delete();


msgS.delete(6000);
    if(win > 100) return message.channel.send(":x: **Error: you can have more than 100 winners**,")
if(win.includes("!"))return message.reply(`**:x: | Error**`);
if(win.includes("@"))return message.reply(`**:x: | Error**`);
if(win.includes("#"))return message.reply(`**:x: | Error**`);
if(win.includes("$"))return message.reply(`**:x: | Error**`);
if(win.includes("%"))return message.reply(`**:x: | Error**`);
if(win.includes("^"))return message.reply(`**:x: | Error**`);
if(win.includes("&"))return message.reply(`**:x: | Error**`);
if(win.includes("*"))return message.reply(`**:x: | Error**`);
if(win.includes("("))return message.reply(`**:x: | Error**`);
if(win.includes(")"))return message.reply(`**:x: | Error**`);
if(win.includes("-"))return message.reply(`**:x: | Error**`);
if(win.includes("="))return message.reply(`**:x: | Error**`);
if(win.includes("+"))return message.reply(`**:x: | Error**`);
if(win.includes("."))return message.reply(`**:x: | Error**`);
if(win.includes(","))return message.reply(`**:x: | Error**`);
if(win.includes("~"))return message.reply(`**:x: | Error**`);
if(win.includes("`"))return message.reply(`**:x: | Error**`);
if(win.includes(`\\`))return message.reply(`**:x: | Error**`);
if(win.includes("'"))return message.reply(`**:x: | Error**`);
if(win.includes(";"))return message.reply(`**:x: | Error**`);
if(win.includes(":"))return message.reply(`**:x: | Error**`);
if(win.includes("l"))return message.reply(`**:x: | Error**`);
if(win.includes("/"))return message.reply(`**:x: | Error**`);
if(win.includes("?"))return message.reply(`**:x: | Error**`);

msgS.edit(embed34)
        client.giveawaysManager.edit(messageID, {
               newWinnerCount: win,

                        
 }).then(() => {
            message.channel.send("**Success! Giveaway will updated in less than "+(client.giveawaysManager.options.updateCountdownEvery/1000)+" seconds.**").then(msg => msg.delete(6000))
        }).catch((err) => {
            message.channel.send("**No giveaway found for "+messageID+", please check and try again**").then(msg => msg.delete(6000))
        });

                        })
                    })


    })
    })
            })
    })
 

    }