const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "hug", 
    aliases: [ "cuddle" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {

        let hug = ['https://media1.tenor.com/images/5ccc34d0e6f1dccba5b1c13f8539db77/tenor.gif?itemid=17694740', 'https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif?itemid=5634630', 'https://media1.tenor.com/images/428b7ed57db9d7aeb2e3f70f21f7bb25/tenor.gif?itemid=12887269', 'https://media1.tenor.com/images/3e647c2df4183920ba3b036f6d057dae/tenor.gif?itemid=17092927', 'https://media1.tenor.com/images/b3f7b2e24f8605ed106fdeff6f03df62/tenor.gif?itemid=14815148', 'https://media1.tenor.com/images/1a7b7ced63d344e40d567779d5e9fe7c/tenor.gif?itemid=14389983', 'https://media1.tenor.com/images/dcd084c3cd00b5fef751fe5c3a67a814/tenor.gif?itemid=14193402', 'https://media1.tenor.com/images/228cc8397577141822195070c88f6083/tenor.gif?itemid=4977890', 'https://media1.tenor.com/images/08de7ad3dcac4e10d27b2c203841a99f/tenor.gif?itemid=4885268', 'https://media1.tenor.com/images/a08f4f7dc5344b7271533160f38e9456/tenor.gif?itemid=16103092', 'https://media1.tenor.com/images/4f2158f495fa4a0cf80e38605dfe81e0/tenor.gif?itemid=16121369']
        let mathhug = Math.floor(Math.random() * hug.length)

        let emotes = ['<a:charmyhug1:767726393273352192>', '<a:charmyhug2:767726392858116116>', '<a:charmyhug3:767726393311887371>']
        let mathemote = Math.floor(Math.random() * emotes.length)

        let frases = ['acaba de abrazar repentinamente a', 'empezo a abrazar a', 'abrazo a', 'le dio un abrazo cariñoso a']
        let mathfrases = Math.floor(Math.random() * frases.length)

        let target = message.mentions.users.first() || args[0]

        if(!target){

        let embed = new MessageEmbed()
        .setImage(hug[mathhug])
        .setDescription(`**${message.author.username}** acaba de abrazar a un ser imaginario! OwO`)
        .setColor("RANDOM")
        
        message.channel.send(embed)

    }else{

        let embed = new MessageEmbed()
        .setImage(hug[mathhug])
        .setDescription(`**${message.author.username}** ${frases[mathfrases]} **${target.username}** ${emotes[mathemote]}`)
        .setColor("RANDOM")

        message.channel.send(embed)
    }

    }
}