const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "facepalm", 
    aliases: [], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let gif = ['https://media1.tenor.com/images/bc3f3842afb1edcba095f9bf766405b2/tenor.gif?itemid=17778269', 'https://media1.tenor.com/images/142d74bbd13fc305aed5a4894c0c3f7f/tenor.gif?itemid=16642818', 'https://media1.tenor.com/images/5e29a1db9149211728b22bfd01f88771/tenor.gif?itemid=10336271', 'https://media1.tenor.com/images/9a269d284388ae4906983f5dfbb15c64/tenor.gif?itemid=17106384', 'https://media1.tenor.com/images/fc64d56893bc80a08c95e2c79f739dc2/tenor.gif?itemid=4551662', 'https://media1.tenor.com/images/43f438c58296dabd4bd71f282987f44c/tenor.gif?itemid=10157360', 'https://media1.tenor.com/images/015b8063c7018c2880e88c6014a0ffaf/tenor.gif?itemid=12168336', 'https://media1.tenor.com/images/8d224fe698e128391249e3f31814b38d/tenor.gif?itemid=5948162']
        let mathgif = Math.floor(Math.random() * gif.length)

        let frases = ['se siente avergonzado de', 'siente pena por']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        let sinmencion = ['se siente apenado por ello', 'se siente avergonzado']
        let mathsinmencion = Math.floor(Math.random() * sinmencion.length)

        if(!target){

            let embed = new MessageEmbed()
            .setImage(gif[mathgif])
            .setDescription(`**${message.author.username}** ${sinmencion[mathsinmencion]}`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }else{

            let embed = new MessageEmbed()
            .setImage(gif[mathgif])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }


    }
}