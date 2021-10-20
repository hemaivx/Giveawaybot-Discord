const ms = require('ms');

exports.run = async (client, message, args) => {

if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send('**:x: You need to have the manage messages permissions to reroll giveaways.**');
    }

    if(!args[0]){
        return message.channel.send('**:x: You have to specify a valid message ID!**');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel('**Unable to find a giveaway for `'+args.join(' ')+'`**');
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('**Giveaway rerolled!**');
    })
    .catch((e) => {
        if(e.startsWith(`**Giveaway with message ID ${giveaway.messageID} is not ended.**`)){
            message.channel.send('**This giveaway is not ended!**');
        } else {
            console.error(e);
            message.channel.send('An error occured...');
        }
    });

};

