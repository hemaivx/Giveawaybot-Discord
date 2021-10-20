const Discord = require("discord.js");
const fs = require("fs");
var plus = JSON.parse(fs.readFileSync(`./plus.json`, `UTF8`));
if (!prefix) {
  var prefix = plus.prefix;
} else {
  prefix = plus.prefix;
}
module.exports.run = async (client, message, args) => {
if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

message.react("✅")

    let plu = [`
> Plus Commands
${prefix}plus  : الحصول علي معلومات بوت البلس
${prefix}plus move  [New serverID]  : نقل البوت من سيرفر الي اخر 
${prefix}plus prefix [New Prefix] : لتغير برفكس البوت
${prefix}plus transfer [New owner]  : نقل ملكيه البوت الي شخص اخر
${prefix}plusname [New name]  : تغير اسم بوت البلس
${prefix}plusavatar [avatarURL]  : تغير صوره بوت البلس
${prefix}plusplaying [playing status]  : تغير حاله البوت الي بلاينج
${prefix}pluswatching [watching status]  : تغير حاله البوت الي واتشنق
${prefix}plusrestart  : عمل ريستارت لبوت البلس

> شكرا لأستخدامكم خدمه البلس الخاصه ببوت GiveawaysBot
"ملحوظه"
يجب ان تكون مالك هذا البوت حتي تستطيع استخدام هذه الاوامر
`]


    let info1 = [`


>  About Bot :
**
Developers:
> <@622710271705743361>
> <@445630664671232000>
> <@431150885549113344>
 **`]


    let arbic = [`
   Help Arabic

__اوامر أساسية __:
${prefix}list  : لعرض قائمة القيفوايات المصنوعة 
${prefix}setlog  : لرؤية لوق للأشخاص عاملين القيف واي
${prefix}ping : لمعرفة سرعة إتصال البوت
${prefix}reroll [ID message] : لإختيار فائز إخر
${prefix}del [ID message] : لإلغاء القيف واي
${prefix}end [ID message] : انهاء القيف واي قبل الوقت المحدد واختيار الفائز
${prefix}edit : لتغير الجائزه او الفائزين
__طريقة بدا القيف واي__ :
${prefix}start : انشاء قيف واي
\`مثال : \n ${prefix}start 1m 2w Good prize \`

  
   `]

let english = `
Help English

__ Commands __ :
${prefix}list  : list make giveaway  
${prefix}setlog  : log's start , end : giveaway
${prefix}ping : To show the ping bot
${prefix}invite : To Invite the bot
${prefix}reroll [ID message] : To Choose a new winner
${prefix}del [ID message] : To Remove Giveaway 
${prefix}end [ID message] : To end the Giveaway and choose a winner

__ Giveaway __ :
${prefix}start : To start the giveaway 
\`example: \n ${prefix}start 1m 2w Good prize \`


Click here <:Saudi:673574307502227466> to go to Arabic `

let info = `__اوامر أساسية __:
${prefix}list  : لعرض قائمة القيفوايات المصنوعة 
${prefix}setlog  : لرؤية لوق للأشخاص عاملين القيف واي
${prefix}ping : لمعرفة سرعة إتصال البوت
${prefix}invite : لدعوة البوت
${prefix}reroll [ID message] : لإختيار فائز إخر
${prefix}del [ID message] : لإلغاء القيف واي
${prefix}end [ID message] : انهاء القيف واي قبل الوقت المحدد واختيار الفائز
${prefix}edit : لتغير الجائزه او الفائزين

__طريقة بدا القيف واي__ :
${prefix}start : انشاء قيف واي
\`مثال : \n ${prefix}start 1m 2w Good prize \`
 `
    let page = 1;

 message.author.send(`-`).catch(err => {
  return message.reply("**Your DM is closed \:x:**");})



    let embed = new Discord.RichEmbed()
		.setColor("#36393e")
    .setFooter(``)
    .setDescription(`${info}`)

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⬅️').then( r => {
msg.react('➡️').then( r => {



        const plus = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
        const back = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;


        const pluse11 = msg.createReactionCollector(plus, { time: 2000000});
        const back33 = msg.createReactionCollector(back, { time: 2000000});



    back33.on('collect', r => {
           // if (page === pages.length) return;
          //  page++;

            embed.setDescription(`${arbic}`);

  
           // embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })


      pluse11.on('collect', r => {
           // if (page === pages.length) return;
          //  page++;

            embed.setDescription(`${plu}`);

  
           // embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })


        
    
})
   }) 
})
  }
    
                                         
  
    
    

    
    
