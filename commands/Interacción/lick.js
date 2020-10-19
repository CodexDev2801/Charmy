const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "slap", 
    aliases: [ "cachetada" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {
        
        let lick = ['https://media1.tenor.com/images/b08b6d61bcf16bee7d56408f61855f35/tenor.gif?itemid=17549074', 'https://media1.tenor.com/images/4ad8cf8c99b8dd676654cabb4660781f/tenor.gif?itemid=16465150', 'https://media1.tenor.com/images/5f73f2a7b302a3800b3613095f8a5c40/tenor.gif?itemid=10005495', 'https://media1.tenor.com/images/5c5828e51733c8ffe1c368f1395a03d0/tenor.gif?itemid=14231351', 'https://media1.tenor.com/images/b00d152c5645975a06c4916e360635ef/tenor.gif?itemid=15900643', 'https://media1.tenor.com/images/6b701503b0e5ea725b0b3fdf6824d390/tenor.gif?itemid=12141727', 'https://media1.tenor.com/images/9643577662a9946de17bd8c3fd124c72/tenor.gif?itemid=16422435', 'https://media1.tenor.com/images/39855a090946f3b88aee3bab9c785cd7/tenor.gif?itemid=16574608', 'https://media1.tenor.com/images/0ce34500facf2ada86307bb740a03dfd/tenor.gif?itemid=5567738', 'https://media1.tenor.com/images/3cbd13d5bd4c0a541d85d1d427c49abd/tenor.gif?itemid=16465188']
        let mathlick = Math.floor(Math.random() * lick.length)

        let emotes = ['<:charmylick1:767754746827898910>', '<a:charmylick2:767754746823180288>', '<:charmylick3:767754746810859520>']
        let mathemote = Math.floor(Math.random() * emotes.length)
        
        let frases = ['lamio a', 'acaba de lamer a', 'probo a']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){

            let embed = new MessageEmbed()
            .setImage(lick[mathlick])
            .setDescription(`**${message.author.username}** lamio a un ser imaginario O.o`)
            .setColor("RANDOM")
    
            message.channel.send(embed)

     
    }else{

        let embed = new MessageEmbed()
        .setImage(lick[mathlick])
        .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
        .setColor("RANDOM")

        message.channel.send(embed)

    }

    }
}