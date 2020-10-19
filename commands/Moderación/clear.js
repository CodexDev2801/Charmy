module.exports = {
    name: "purge", // set command name
    aliases: [ "clear" ], // set command aliases
    permissions: ['MANAGE_MESSAGES'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
 
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Por favor ingrese solo un número!') }

    if (parseInt(args[0]) > 100) {
        return message.reply('Solo puede eliminar 100 mensajes a la vez!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.channel.send(`**Completado** Se han eliminado ***${deleteAmount}*** mensajes.`)
 
 
 
    }
}