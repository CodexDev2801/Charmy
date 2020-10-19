const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../package.json');
const Command = require('../../Structure/Command');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');


module.exports = {
    name: "botinfo", // set command name
    aliases: [ "infobot" ], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: true, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
		
		
		const { guilds, guild } = message
		const channels = message.guild.channels.cache;
        const core = os.cpus()[0];
		const embed = new MessageEmbed()
			.setColor(message.guild.me.displayHexColor || 'BLUE')
			.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.addField('General', [
				`**Cliente:** Charmy`,
				`**Developer:** Solo Codex#9212`,
				`**Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**Usuarios:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**Canales:** ${client.channels.cache.size.toLocaleString()}`,
				`**Fecha de Creación:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**Node.js:** ${process.version}`,
				`**Version:** v${version}`,
				`**Discord.js:** v${djsversion}`,
				'\u200b'
			])
			.addField('Sistema', [
				`**Platforma:** ${process.platform}`,
				`**Uptime:** ${ms(os.uptime() * 1000, { long: false })}`,
				`**CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Modelo: ${core.model}`,
				`\u3000 Velocidad: ${core.speed}MHz`,
			])

		message.channel.send(embed);





    }
}