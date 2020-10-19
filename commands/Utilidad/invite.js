const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "invite", // set command name
    aliases: [ "inv" ], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
    
        let embed = new MessageEmbed()
        .setTitle("Invita al bot!")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=635824993250574346&permissions=8&scope=bot")
        .setDescription("Invitando al bot a tu servidor me apoyarias mucho!")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`${message.author.username}`)
        message.channel.send(embed)


    }
}