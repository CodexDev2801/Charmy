const { MessageEmbed, Message } = require("discord.js")

module.exports = {
    name: "baka", 
    aliases: [ "estupido" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let baka = ['https://media1.tenor.com/images/d381f1de7b525c2bbd21e803cbd253f4/tenor.gif?itemid=12908346', 'https://media1.tenor.com/images/b801384c6750d9227158795a7fd23eec/tenor.gif?itemid=16329804', 'https://media1.tenor.com/images/88819a7e457c5dc3f124b9d6bb720edc/tenor.gif?itemid=5586968', 'https://media1.tenor.com/images/78ab79a92108f885dfe2faf35ef5103b/tenor.gif?itemid=16811539']
        let mathbaka = Math.floor(Math.random() * baka.length)  

        let frases = ['le dice estupido a', ' te acaba de decir estupido', 'le dice **baka** a']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){
            let embed = new MessageEmbed()
            .setImage(baka[mathbaka])
            .setDescription(`**${message.author.username}** dice baka!`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }else{
            let embed = new MessageEmbed()
            .setImage(baka[mathbaka])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }


    }
}