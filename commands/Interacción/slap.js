const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "slap", 
    aliases: [ "cachetada" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let slap = ['https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612', 'https://media1.tenor.com/images/53d180f129f51575a46b6d3f0f5eeeea/tenor.gif?itemid=5373994', 'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956', 'https://media1.tenor.com/images/b7a844cc66ca1c6a4f06c266646d070f/tenor.gif?itemid=17423278', 'https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993', 'https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993', 'https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394', 'https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720', 'https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254', 'https://media1.tenor.com/images/299366efafc95bc46bfd2f9c9a46541a/tenor.gif?itemid=16819981', 'https://media1.tenor.com/images/448e9db420b1d7faadad508b887b2a00/tenor.gif?itemid=7602649']
        let mathslap = Math.floor(Math.random() * slap.length)

        let frases = ['abofeteo a', 'le dio una cacheta a', 'acaba de abofetear a', 'te acaba de abofetear']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        let embed = new MessageEmbed()
        .setImage(slap[mathslap])
        .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
        .setColor("RANDOM")



    }
}