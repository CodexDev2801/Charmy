const Command = require('../../Structure/Command');
const { MessageEmbed } = require("discord.js");
const moment = require("moment")


module.exports = {
    name: "userinfo", // set command name
    aliases: [ "whois" ], // set command aliases
    permissions: [], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
        
        const flags = {
            DISCORD_EMPLOYEE: 'Discord Employee',
            DISCORD_PARTNER: 'Discord Partner',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
            HYPESQUAD_EVENTS: 'HypeSquad Events',
            HOUSE_BRAVERY: 'House of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Bot Developer'
        };

        const member = message.mentions.members.last() || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || 'BLUE')
			.addField('Usuario', [
				`**Username:** ${member.user.username}`,
				`**Discriminador:** ${member.user.discriminator}`,
				`**ID:** ${member.id}`,
				`**Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Ninguna'}`,
				`**Avatar:** [Link del avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**Cuenta creada:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**Status:** ${member.user.presence.status}`,
				`**Game:** ${member.user.presence.game || 'No esta jugando nada.'}`,
				`\u200b`
			])
			.addField('Miembro', [
				`**Rol más alto:** ${member.roles.highest.id === message.guild.id ? 'Ninguno' : member.roles.highest.name}`,
				`**Fecha de ingreso al servidor:** ${moment(member.joinedAt).format('LL LTS')}`,
				`\u200b`
			]);
		return message.channel.send(embed);







    }
}