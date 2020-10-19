const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unban", 
    aliases: [ "desbanear" ], 
    permissions: ["BAN_MEMBERS"], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 5, 
    exec: async (client, message, args) => {

        let userID = args[0] 
        message.guild.fetchBans().then(bans=> { 
        if(bans.size == 0) return message.channel.send(`El usuario con la ID \`${userID}\` no se encuentra baneado en este servidor. Usuario: <@${userID}>` )  
        let bUser = bans.find(b => b.user.id == userID)
        if(!bUser) return message.channel.send(`El usuario \`${userID}\` no existe, comprueba que la ID es correcta`) 
        message.guild.members.unban(bUser.user)
        message.channel.send("\`Desbaneo exitoso\`")
            userID.send(`Se te ha revocado el baneo en el servidor \`${message.guild.name}\`!`)
        })

        console.log(userID)



    }
}