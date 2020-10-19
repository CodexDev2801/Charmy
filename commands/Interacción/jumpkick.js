const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "jumpkick", 
    aliases: [ "patadavoladora" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let jumpkick = ['https://media1.tenor.com/images/f27b007e24e764ad95343ace717d2277/tenor.gif?itemid=16418298', 'https://media1.tenor.com/images/0f62bf8ef2287cdfdf5701d6900ade8d/tenor.gif?itemid=14080585', 'https://media1.tenor.com/images/240a5b7712cc4e27215af744e8702a9e/tenor.gif?itemid=5322399', 'https://media1.tenor.com/images/297aa1fd08cac49cedeb58cfb112d1ba/tenor.gif?itemid=5741304', 'https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif', 'https://i.imgur.com/fLkcVVt.gif']
        let mathjumpkick = Math.floor(Math.random() * jumpkick.length)

        let frases = ['acaba de darle una patada voladora a', 'te acaba de pegar con su patada voladora', 'uso la patada voladora en']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        let nomencion = ['ocupo la tecnica secreta de la patada voladora para todo el servidor', 'le dio una patada voladora a todo el servidor']
        let mathnomencion = Math.floor(Math.random() * nomencion.length)

        if(!target){
            let embed = new MessageEmbed()
            .setImage(jumpkick[mathjumpkick])
            .setDescription(`**${message.author.username}** ${nomencion[mathnomencion]}`)
            .setColor("RANDOM")

            message.channel.send(embed)
        }else{
            let embed = new MessageEmbed()
            .setImage(jumpkick[mathjumpkick])
            .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}**`)
            .setColor("RANDOM")

            message.channel.send(embed)

        }



    }
}