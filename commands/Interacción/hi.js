const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "hi", 
    aliases: [ "saludar" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let hi = ['https://media1.tenor.com/images/2b121b915c9f3411eeba5092cd3c80bb/tenor.gif?itemid=13783216', 'https://media1.tenor.com/images/1bc74d686385dabe1e2076d5ace587fd/tenor.gif?itemid=13649735', 'https://media1.tenor.com/images/d10c3d213be6893235d97ae768db8c07/tenor.gif?itemid=4608178', 'https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif?itemid=8807701', 'https://media1.tenor.com/images/2ef78ab2f3e2acbf077388e26d3bc2da/tenor.gif?itemid=14815980', 'https://media1.tenor.com/images/79f33c2f524cbfed4ef6896b39e67663/tenor.gif?itemid=9416181', 'https://media1.tenor.com/images/79f33c2f524cbfed4ef6896b39e67663/tenor.gif?itemid=9416181', 'https://media1.tenor.com/images/056c584d9335fcabf080ca43e583e3c4/tenor.gif?itemid=8994845', 'https://media1.tenor.com/images/b82e6a78b221f7dc2e41605b6aa2cbcc/tenor.gif?itemid=11503720', 'https://media1.tenor.com/images/43b26f57280c43f77e87a546bf6c6011/tenor.gif?itemid=5634610']
        let mathhi = Math.floor(Math.random() * hi.length)

        let frases = ['le dice hola a', 'saluda a', '']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){

            let embed = new MessageEmbed()
            .setImage(hi[mathhi])
            .setDescription(`**${message.author.username}** saluda a todo el mundo!`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }else{

            let embed = new MessageEmbed()
            .setImage(hi[mathhi])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")
            
            message.channel.send(embed)
        }


    }
}