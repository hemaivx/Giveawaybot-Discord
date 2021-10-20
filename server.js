const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");

const config = require("./plus.json");
client.config = config;

const { GiveawaysManager } = require("discord-giveaways");


const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`حط هنا رابط الموقع بتاعك`);
}, 280000);

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});


 


const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#77c8eb",
        reaction: "🎉"
    }
});
client.giveawaysManager = manager;




client.on('warn', console.warn);
client.on('error', console.error);


client.commands = new Discord.Collection();


fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});





var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}


var log = JSON.parse(fs.readFileSync(`./db/loggiveaway.json`, `UTF8`));

client.on("message", message =>{
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(command === "setlog") {
      let d = args.join(" ");
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have the **`ADMINISTRATOR`** permission!")
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply("I must have the **`ADMINISTRATOR`** permissions!")
      if(!message.member.guild.channels.find(x => x.name === d)) return message.reply("Usage: **`(channel name)`**");
      message.reply("Successfully applied log to **`" + d + "`**")
      log[message.guild.id] = {
          guild: message.guild.name,
          channel: d
      }
      fs.writeFile("./db/loggiveaway.json", JSON.stringify(log, null, 4), err => {
          if(err) throw err;
  });
}
});

/// 









var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));


//,_,



client.on(`message`, msg => {

var time2 = "2020/02/15"
  var time = "2020/03/15";
        var date = new Date(time.replace("/", "-"))
    let embed = new Discord.RichEmbed()
		.setColor(`#36393e`)
    .setFooter(``)
    .setDescription(` > Plus number : 2
 > This Plus registered to  : <@${plus.ownerID}>
 > Plus subscribe start in : ${time2}
 > End in : **${require("countdown")(date).toString()}**`)
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).split(` `);
    var command = `${args[0]}`;
    switch (command) {
        case `plus`:
            if (msg.author.id !== plus.ownerID) return;
            var cmd = args[1];
          if (!cmd) return msg.channel.send(embed)    
         
   switch(cmd) {
               case `move`:
                    var guild = args[2];
                    if (!guild) return msg.channel.send(`Worng Server ID Use : **${plus.prefix}**plus moveserver [ServerID]`);
                    if (isNaN(parseInt(guild))) return msg.channel.send(`Worng Server ID Use : **${plus.prefix}plus moveserver [ServerID]** `);
                    if (guild.length !== msg.guild.id.length) return msg.reply(` Worng Server ID Use : **${plus.prefix}plus moveserver ServerID** `);
                         msg.channel.send(
              `**done , Change plus server and we send new link in your DM , please wait 10 second to setup**`
   );
client.users.get(plus.ownerID).send(`
**There your New link :
https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=391264&scope=bot**
`).then(() => {
  process.exit(1);
})
                   plus.guildID = guild;
                break;
          case `transfer`:
let member = msg.mentions.members.first();
    if(!member) return msg.channel.send(`**\`${prefix}plus transfer [user]\`**` );
    if(msg.author.id === member.user.id) return msg.channel.send(`**You can not add yourself**`)
            var owner = member.user.id
             msg.channel.send(
              `**done , Change owner bot to : <@${owner}>, please wait 10 second to setup**`
            ).then(() => {
  process.exit(1);
})
            plus.ownerID = owner;
            break;
          case `prefix`:
            var prfx = args[2];
            if (!prfx) return msg.reply(`prefix ?`);
            plus.prefix = prfx;
            msg.channel.send(
              `**done , my prefix now is : \`${prfx}\`, please wait 10 second to setup prefix**`
            ).then(() => {
  process.exit(1);
})

           
            }
        break;
    };
    fs.writeFileSync(`./plus.json`, JSON.stringify(plus, (null, 4)));
   });

/*client.on(`guildCreate`, guild => {
    if (guild.id !== plus.guildID) guild.leave();
    setTimeout(function Sweetie(){
        client.guilds.forEach(g => {
            if (g.id !== plus.guildID) guild.leave();
        });
    }, 5000);
});*/
client.on ('guildCreate', async (guild) => {
    var guilds = [`${plus.guildID}`, `${plus.idemoji}`];
    if (guilds.includes (guild.id)) return;
    else guild.leave();
})

client.on(`ready`, () => {
    client.guilds.forEach(guild => {
    var guilds = [`${plus.guildID}`, `${plus.idemoji}`];
    if (guilds.includes (guild.id)) return;
    else guild.leave();

    });
});


   
const adminprefix = `${config.prefix}`
let BOT_OWNERS = plus.ownerID
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!BOT_OWNERS.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'plusplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**Done, Changed playing status of plus to : ${argresult}**`)
  } else 
   
  if (message.content.startsWith(adminprefix + 'pluswatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Done, Changed watching status of plus to : ${argresult}**`)
  } else 
  
  if (message.content.startsWith(adminprefix + 'plusname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Done, Changed name of plus to : **${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'plusavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Done, Changed avatar of plus to : ${argresult} `);
}
});


const cmd = require("node-cmd")
client.on("message", async message => {
  if(message.author.id !== plus.ownerID) return;
  if(message.content === prefix + "plusrestart") {
    await cmd.run("refresh")
console.log(`Restart by ${message.author.tag}`)
    await message.channel.send("**Restarting... :timer:**")
  }
})

const ms = require("pretty-ms");


var extendTime = Date.now () + require ("ms") ("30d");
setInterval (() => {
    var status = Date.now () > extendTime;
    if (status == true) client.users.get(plus.ownerID).send(`
**Plus End .
اهلا عزيزي , 
نريد تنبيهك ان الأشتراك الخاص بك قد انتهاء
نتمنى منك مراجعة سيرفر الدعم لتجديد ..**
سيرفر الدعم :
https://discord.gg/pG22jHs
`)   
if (status == true)   plus.token = "hemaivx"



    if (extendTime - Date.now ()) console.log (require ("ms") (extendTime - Date.now ()))
  fs.writeFileSync(`./plus.json`, JSON.stringify(plus, (null, 4)));

}, require ("ms") ("1s"))









client.login(config.token);
