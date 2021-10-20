const ms = require("ms"); 
const fs = require("fs");
const Discord = require("discord.js");
const loggiveaway = JSON.parse(fs.readFileSync('./db/loggiveaway.json', 'utf8'));
const config = require("../db/config.json");
const { GiveawaysManager } = require("discord-giveaways");
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}
exports.run = async (client, message, args) => {

if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

          if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(' \❌ Error - You Don,t Have Permission `MANAGE_MESSAGES` ')
     if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply(" \❌ Failure  - I Don't Have  Permission `MANAGE_MESSAGES` ").then(msg => msg.delete(6000))
 
 message.delete();//wait 
 if(!args[0])return message.channel.send(`<:Error:678357651746324502> | Failed - **Example Giveaway Start \n \`#gstart 1d 1w Prize\` **`);
 
 if(!args[1])return message.reply(`\❌ Wrong! - How many winners?\`example: \n #gstart 1m 2w Good prize \` `)
 if(!args[2])return message.reply(`\❌ - Add the  prize? \`example: \n #gstart 1m 2w Good prize \``)
  

if(args[0].includes("1s")) return message.channel.send(`**:x: | Error**`);
if(args[0].includes("2s")) return message.channel.send(`**:x: | Error**`);
if(args[0].includes("3s")) return message.channel.send(`**:x: | Error**`);
if(args[0].includes("!"))return message.reply(`**:x: | Error**`);
if(args[0].includes("@"))return message.reply(`**:x: | Error**`);
if(args[0].includes("#"))return message.reply(`**:x: | Error**`);
if(args[0].includes("$"))return message.reply(`**:x: | Error**`);
if(args[0].includes("%"))return message.reply(`**:x: | Error**`);
if(args[0].includes("^"))return message.reply(`**:x: | Error**`);
if(args[0].includes("&"))return message.reply(`**:x: | Error**`);
if(args[0].includes("*"))return message.reply(`**:x: | Error**`);
if(args[0].includes("("))return message.reply(`**:x: | Error**`);
if(args[0].includes(")"))return message.reply(`**:x: | Error**`);
if(args[0].includes("-"))return message.reply(`**:x: | Error**`);
if(args[0].includes("="))return message.reply(`**:x: | Error**`);
if(args[0].includes("+"))return message.reply(`**:x: | Error**`);
if(args[0].includes("."))return message.reply(`**:x: | Error**`);
if(args[0].includes(","))return message.reply(`**:x: | Error**`);
if(args[0].includes("~"))return message.reply(`**:x: | Error**`);
if(args[0].includes("`"))return message.reply(`**:x: | Error**`);
if(args[0].includes(`\\`))return message.reply(`**:x: | Error**`);
if(args[0].includes("'"))return message.reply(`**:x: | Error**`);
if(args[0].includes(";"))return message.reply(`**:x: | Error**`);
if(args[0].includes(":"))return message.reply(`**:x: | Error**`);
if(args[0].includes("l"))return message.reply(`**:x: | Error**`);
if(args[0].includes("/"))return message.reply(`**:x: | Error**`);
if(args[0].includes("?"))return message.reply(`**:x: | Error**`);
if(args[1].includes("!"))return message.reply(`**:x: | Error**`);
if(args[1].includes("@"))return message.reply(`**:x: | Error**`);
if(args[1].includes("#"))return message.reply(`**:x: | Error**`);
if(args[1].includes("$"))return message.reply(`**:x: | Error**`);
if(args[1].includes("%"))return message.reply(`**:x: | Error**`);
if(args[1].includes("^"))return message.reply(`**:x: | Error**`);
if(args[1].includes("&"))return message.reply(`**:x: | Error**`);
if(args[1].includes("*"))return message.reply(`**:x: | Error**`);
if(args[1].includes("("))return message.reply(`**:x: | Error**`);
if(args[1].includes(")"))return message.reply(`**:x: | Error**`);
if(args[1].includes("-"))return message.reply(`**:x: | Error**`);
if(args[1].includes("="))return message.reply(`**:x: | Error**`);
if(args[1].includes("+"))return message.reply(`**:x: | Error**`);
if(args[1].includes("."))return message.reply(`**:x: | Error**`);
if(args[1].includes(","))return message.reply(`**:x: | Error**`);
if(args[1].includes("~"))return message.reply(`**:x: | Error**`);
if(args[1].includes("`"))return message.reply(`**:x: | Error**`);
if(args[1].includes(`\\`))return message.reply(`**:x: | Error**`);
if(args[1].includes("'"))return message.reply(`**:x: | Error**`);
if(args[1].includes(";"))return message.reply(`**:x: | Error**`);
if(args[1].includes(":"))return message.reply(`**:x: | Error**`);
if(args[1].includes("l"))return message.reply(`**:x: | Error**`);
if(args[1].includes("/"))return message.reply(`**:x: | Error**`);
if(args[1].includes("?"))return message.reply(`**:x: | Error**`);

    if(args[1] > 100) return message.channel.send(":x: **Error: you can have more than 100 winners**,")
 let timelimitfree = ms('20 days')
        if(ms(args[0]) >= timelimitfree){
        return message.channel.send("🛑 | Error: you can't create giveaways who are more than 20 days ago,");
          } else {






 let msg = await message.channel
        .send(`**:alarm_clock: Time is moving**`);
client.giveawaysManager.start(message.channel,  {
 time: ms(args[0]),
    prize: args.slice(2).join(" "),
    winnerCount: parseInt(args[1]),
        hostedBy: message.author ,

    messages: {
     giveaway: "> **Giveaway Start** 🎉",
        giveawayEnded: "> **Giveaway Ended** 🎉",
     timeRemaining: `Time remaining: ** {duration} **`,       
 inviteToParticipate: "React with 🎉 to enter!",
     winMessage: `Congratulations, {winners}! You won **{prize}**! 🎉 https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${msg.id}`,
        embedFooter: "Giveaways",
        winners: "Winner",
        noWinner: "A winner could not be determined! 😦",
        hostedBy: "Hosted by: {user}",
       endedAt: "Ends at", 
        units: {
            seconds: "seconds ",
            minutes: "minutes",
            hours: "hours",
            days: "days",
            pluralS: false 
        }

       }



})
 client.giveawaysManager.on('end', (giveaway, winners) => {
       winners.forEach((member) => {
       let winDM = new Discord.RichEmbed()
                          .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
            .setDescription(`**🎉 Congratulations 🎉\nYou won: ${giveaway.prize}\nGo to giveaway\n[Click on the emoji]**\n[💬](https://discordapp.com/channels/${message.guild.id}/${giveaway.channelID}/${giveaway.messageID})`)
            member.send(winDM)
        
}); 

});
 
var log = JSON.parse(fs.readFileSync(`./db/loggiveaway.json`, `UTF8`));

 
 const x =  message.guild.channels.find(mk => mk.name === log[message.guild.id].channel); 
                      if(!x) return; 
                      let d = new Discord.RichEmbed()
                          .setAuthor('<:Warning:678719023554363403> | Warning Logs Giveaway \nThere is someone who did a job Giveaway! ')
                          .addField('This Giveaway Created By:', `<@${message.author.id}>`, true)
                         .addField('This Created ID:',  true)
                         .addField('Thie Giveaway Prize:', `${args.slice(2).join(" ")}` , true)
                         .addField('Thie Giveaway Winners count', `${parseInt(args[1])}` , true)
                         .addField('This Giveaway End at:', `${(args[0])}` , true)
                         .addField('Click To Link To Go Giveaway !', `https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${msg.id}`)
                          .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : config.hexColour}`)
                          .setThumbnail(message.author.avatarURL)
                          .setTimestamp();
x.send(d)

        
          }
          
        
};