const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions");


module.exports = {
    name: "avatar", // set command name
    aliases: [ "pp" ], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
        
        let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`Tu Avatar!`);
      Embed.setImage(message.author.displayAvatarURL({dynamic: true, size: 1024}));
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `Entro: ${formatDate(message.member.joinedAt)}\nID: ${
          message.author.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role.name);
      });
      Embed.setTitle(`${client.users.cache.get(User.id).tag} avatar!`);
      Embed.setImage(client.users.cache.get(User.id).displayAvatarURL({dynamic: true, size: 1024}));
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `Entro: ${formatDate(User.joinedAt)}\nID: ${
          User.id
        }\nRoles: ${roles}`
      );
      return message.channel.send(Embed);
        }
    }
}