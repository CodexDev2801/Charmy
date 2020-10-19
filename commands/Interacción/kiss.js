const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "kiss", 
    aliases: [ "beso" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 2, 
    exec: async (client, message, args) => {
        
        let kiss = ['https://media1.tenor.com/images/6b5e44911c0b3dda5b18a0c142119c20/tenor.gif?itemid=15974229', 'https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192', 'https://media1.tenor.com/images/5cf6c2fef93911111538d837ec71c24c/tenor.gif?itemid=5448064','https://media1.tenor.com/images/1a124a8291930684139a85f22158ce54/tenor.gif?itemid=15924413', 'https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412', 'https://media1.tenor.com/images/4c66d14c58838d05376b5d2712655d91/tenor.gif?itemid=15009390', 'https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409', 'https://media1.tenor.com/images/a15d1b73bcf32f112f6f1002649710a6/tenor.gif?itemid=17914568', 'https://media1.tenor.com/images/d7296b6473bbf41490b5448db41b7f68/tenor.gif?itemid=17706821', 'https://media1.tenor.com/images/4d89bba3d6d3710651f8e4c63dff1b18/tenor.gif?itemid=8035268', 'https://media1.tenor.com/images/80e68627c4cb9667c9f50a6dc9c1f4b1/tenor.gif?itemid=15974214', 'https://media1.tenor.com/images/124e7feffc18dfbdc67686260c733c98/tenor.gif?itemid=17208379', 'https://media1.tenor.com/images/ad514e809adc14f0b7722a324c2eb36e/tenor.gif?itemid=14375355', 'https://media1.tenor.com/images/be8014584d3ed6e29b43a2044503b90b/tenor.gif?itemid=10358836', 'https://media1.tenor.com/images/8f4032912d7d73aa84d6c63313acf4f4/tenor.gif?itemid=5255213', 'https://media1.tenor.com/images/a2332f49f11038faa1a76b049d5d4818/tenor.gif?itemid=5666774']
        let mathkiss = Math.floor(Math.random() * kiss.length)

        let emojis = ['<a:charmyheart3:767504390071517224>', '<a:charmyheart4:767504389421793310>', '<:charmyheart5:767504390159466536>', '<:charmyheart6:767504390001000509>', '<a:charmyheart7:767504398975893516>', '<:charmyheart8:767504388985323535>', '<:charmyheart9:767504393028632656>', '<a:charmyheart2:767504389186388009>', '<a:charmyheart1:767504388855824444>']
        let mathemojis = Math.floor(Math.random() * emojis.length)

        let frases = ['acaba de robarle un beso a', 'acaba de besar a', 'beso apasionadamente a', 'beso a', 'acaba de darle un beso a']
        let mathfrase = Math.floor(Math.random() * frases.length)


        const target = message.mentions.users.first() || args[0]

        if(!target){

            let embed = new MessageEmbed()
            .setDescription(`**${message.author.username}** beso a un ser imaginario OwO`)
            .setImage(kiss[mathkiss])
            .setColor("RANDOM")
    
            message.channel.send(embed)
            
        }else{

            let embed = new MessageEmbed()
            .setDescription(`**${message.author.username}** ${frases[mathfrase]} **${target.username}** ${emojis[mathemojis]}`)
            .setImage(kiss[mathkiss])
            .setColor("RANDOM")
    
            message.channel.send(embed)
                }    
            }   
        }   
