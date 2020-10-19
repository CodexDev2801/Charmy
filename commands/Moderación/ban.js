const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ban", // set command name
    aliases: [ "banear" ], // set command aliases
    permissions: ["BAN_MEMBERS"], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {

        const tag = `<@${message.author.id}>`
        const razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"
        
        const usuario = message.mentions.users.first()
        if(usuario){
            const usuarioba = message.guild.members.cache.get(usuario.id)
            usuarioba.ban()
            message.channel.send(`\`El usuario ha sido correctamente baneado\``)
            message.react('767089605043683378')
            usuario.send(`Acabas de ser baneado en el servidor \`${message.guild.name}\` \nRazon: \`${razon}\` `)
        
        } else {

            message.channel.send(`${tag} Debes mencionar a un usuario`)

        }
        
        console.log(usuario)



    }
}