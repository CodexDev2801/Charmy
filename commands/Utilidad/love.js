const { MessageEmbed, MessageAttachment } = require("discord.js");
const Canvas = require("canvas")

module.exports = {
    name: "love",
    aliases: [ "ship" ],
    permissions: [],
    enabled: true,
    cooldown: 5,
    exec: async (client, message, args) => {
        
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
        if(loveLevel < 25){
            frase = "Vaya... Parece que jamas existira una relación entre ustedes. Lo más probable es que queden como amigos."
        }

    
        let target = message.mentions.users.first()
        let autor = message.author || message.mentions.users.seconds()

        const canvas = Canvas.createCanvas(1500, 500);
        const ctx = canvas.getContext("2d")

    const avatarautor = await Canvas.loadImage(autor.displayAvatarURL({format: "png"}))
    ctx.drawImage(avatarautor, 98, 75, 420, 415);

    const avatartarget = await Canvas.loadImage(target.displayAvatarURL({format: "png"}))
    ctx.drawImage(avatartarget, 1085, 75, 420, 415);
    
    const link = await Canvas.loadImage("https://cdn.discordapp.com/emojis/767504388985323535.png?v=1")
    ctx.drawImage(link, 625, 75, 320, 315)
    

    const final = new MessageAttachment(canvas.toBuffer(), "ship.png");

    const amor = message.guild.emojis.cache.find(emoji => emoji.name === 'charmylove');
    
    return message.channel.send(`'<a:charmylove:767808019601817631>' Amor entre: **${autor.username}** y **${target.username}**\n\n💟Probabilidad: ${Math.floor(love)}%\n\n${loveLevel}`, final);

    


    }
}