module.exports = {
    name: "lock", // set command name
    aliases: [ "bloquear" ], // set command aliases
    permissions: ['MANAGE_CHANNELS'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {

      message.delete()

        const { guild } = message
        
        let id = args[0]

        if(!id) message.channel.send("Debes de introducir la ID de un canal de voz para realizar los cambios")

    await guild.channels.cache.get(id).edit({userLimit: args[1] })

    message.channel.send(`El canal se ha actualizado correctamente para ${args[1]} usuarios`)



    }
}