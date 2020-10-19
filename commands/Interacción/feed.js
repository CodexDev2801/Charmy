const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "feed", 
    aliases: [ "alimentar" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let feed = ['https://media1.tenor.com/images/15e7d9e1eb0aad2852fabda1210aee95/tenor.gif?itemid=12005286', 'https://media1.tenor.com/images/8c83febda34de8b38d07057e28094e3a/tenor.gif?itemid=12806391', 'https://media1.tenor.com/images/72268391ffde3cd976a456ee2a033f46/tenor.gif?itemid=7589062', 'https://media1.tenor.com/images/4b48975ec500f8326c5db6b178a91a3a/tenor.gif?itemid=12593977', 'https://media1.tenor.com/images/187ff5bc3a5628b6906935232898c200/tenor.gif?itemid=9340097', 'https://media1.tenor.com/images/8efff4185dfb404532d6132023775bcd/tenor.gif?itemid=6004308', 'https://media1.tenor.com/images/93c4833dbcfd5be9401afbda220066ee/tenor.gif?itemid=11223742']
        let mathfeed = Math.floor(Math.random() * feed.length)

        let frases = ['te acaba de alimentar', 'te ha dado de comer', 'acaba de invitarte de su comida']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){
            let embed = new MessageEmbed()
            .setImage(feed[mathfeed])
            .setDescription(`**${message.author.username}** ha alimentado a un ser imaginario`)
            .setColor("RANDOM")
            
            message.channel.send(embed)
        }else{
            let embed = new MessageEmbed()
            .setImage(feed[mathfeed])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")
        
            message.channel.send(embed)
        }


    }
}