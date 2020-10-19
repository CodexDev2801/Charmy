const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kick", 
    aliases: [ "patada" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let kick = ['https://media1.tenor.com/images/fb2a19c9b689123e6254ad9ac6719e96/tenor.gif?itemid=4922649', 'https://media1.tenor.com/images/79c85e779215421381cb20c93123c3de/tenor.gif?itemid=16836989', 'https://media1.tenor.com/images/4dd99934237218f35c02b7cbf4ac9f9f/tenor.gif?itemid=16580938', 'https://media1.tenor.com/images/2ce5a017f6556ff103bce87b273b89b7/tenor.gif?itemid=16407803', 'https://media1.tenor.com/images/446f49e675e38e1bb10d226f12519092/tenor.gif?itemid=15460532', 'https://media1.tenor.com/images/cc217519af48fe13bea6004afb36f1f2/tenor.gif?itemid=5738223', 'https://media1.tenor.com/images/04d10b9485af324be182902ee9bdfd71/tenor.gif?itemid=17730026', 'https://media1.tenor.com/images/97a72cc7aca4cf3624371e2708f8bb83/tenor.gif?itemid=15958808', 'https://media1.tenor.com/images/05063c082ddc50c1bb979d206fde80c0/tenor.gif?itemid=17476839']
        let mathkick = Math.floor(Math.random() * kick.length)

        let frases = ['te acaba de patear', 'te dio una buena patada', 'pateo a']
        let mathfrases = Math.floor(Math.random() * frases.length)



        let target = message.mentions.users.first() || args[0]

        let mencion = ['acaba de patear a todo el servidor', 'pateo a un ser imaginario']
        let mathmencion = Math.floor(Math.random() * mencion.length)

        if(!target){

            let embed = new MessageEmbed()
            .setImage(kick[mathkick])
            .setDescription(`**${message.author.username}** ${frases[mathmencion]}`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }else{

            let embed = new MessageEmbed()
            .setImage(kick[mathkick])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")
            
            message.channel.send(embed)

        }


    }
}