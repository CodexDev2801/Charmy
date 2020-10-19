module.exports = {
    name: "ping",
    aliases: [ "p" ],
    permissions: [],
    enabled: true,
    cooldown: 5,
    exec: async (client, message) => {
        await message.channel.send(client.i18n.get(message.guild.language, "commands", "ping_command", { ping: client.ws.ping }));
    }
}