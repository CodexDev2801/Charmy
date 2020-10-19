const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "pat", 
    aliases: [ "acariciar" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {
 
        let path = ['https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819', 'https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868', 'https://media1.tenor.com/images/6151c42c94df654b1c7de2fdebaa6bd1/tenor.gif?itemid=16456868', 'https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932', 'https://media1.tenor.com/images/71e74263a48a6e9a2c53f3bc1439c3ac/tenor.gif?itemid=12434286', 'https://media1.tenor.com/images/bfdeb9ec7f89aad86170d06fe4189bec/tenor.gif?itemid=16085314', 'https://media1.tenor.com/images/01a97fee428982b325269207ca22866b/tenor.gif?itemid=16085328', 'https://media1.tenor.com/images/2b3ddd79058842ccb9c1fc6acea0bcaa/tenor.gif?itemid=16243971', 'https://media1.tenor.com/images/daa885ec8a9cfa4107eb966df05ba260/tenor.gif?itemid=13792462', 'https://media1.tenor.com/images/61187dd8c7985c443bf9cd39bc310c02/tenor.gif?itemid=12018805', 'https://media1.tenor.com/images/61187dd8c7985c443bf9cd39bc310c02/tenor.gif?itemid=12018805', 'https://media1.tenor.com/images/f330c520a8dfa461130a799faca13c7e/tenor.gif?itemid=13911345']
        let mathpath = Math.floor(Math.random() * path.length)

        let frases = ['acaricio', 'acaba de acariciar a', 'acaricio tiernamente a']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){
            let embed = new MessageEmbed()
            .setImage(path[mathpath])
            .setDescription(`**${message.author.username}** acarició a un ser imaginario`)
            .setColor("RANDOM")

            message.channel.send(embed)
        
        }else{

            let embed = new MessageEmbed()
            .setImage(path[mathpath])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")

            message.channel.send(embed)

        }
 
 
 
    }
}