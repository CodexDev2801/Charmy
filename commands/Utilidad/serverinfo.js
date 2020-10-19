const { MessageEmbed } = require("discord.js");
const moment = require('moment');


module.exports = {
    name: "serverinfo", 
    aliases: [ "informacionserver" ], 
    permissions: ['MANAGE_GUILD'], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 5, 
    exec: async (client, message, args) => {
        
        const { guild } = message

        const { name, memberCount, ownerID, owner} = guild

        const icon = guild.iconURL()

        let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    guild.emojis.cache.forEach((emoji) => {
        OverallEmojis++;
        if (emoji.animated) {
          Animated++;
          EmojisAnimated += Emoji(emoji.id);
        } else {
          EmojiCount++;
          Emojis += Emoji(emoji.id);
        }
      });

      const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
      const members = message.guild.members.cache;

      const online = message.guild.emojis.cache.find(emoji => emoji.name === 'Conectado');
      const idle = message.guild.emojis.cache.find(emoji => emoji.name === 'Ausente');
      const donotdisturb = message.guild.emojis.cache.find(emoji => emoji.name === 'nomolestar');
      const offline = message.guild.emojis.cache.find(emoji => emoji.name === 'offline');
      const streaming = message.guild.emojis.cache.find(emoji => emoji.name === 'Streaming');
      const boost = message.guild.emojis.cache.find(emoji => emoji.name === 'boost');
      const nitro = message.guild.emojis.cache.find(emoji => emoji.name === 'nitro');

      const channels = message.guild.channels.cache;

      const regions = {
        brazil: 'Brazil',
        europe: 'Europe',
        hongkong: 'Hong Kong',
        india: 'India',
        japan: 'Japan',
        russia: 'Russia',
        singapore: 'Singapore',
        southafrica: 'South Africa',
        sydeny: 'Sydeny',
        'us-central': 'US Central',
        'us-east': 'US East',
        'us-west': 'US West',
        'us-south': 'US South'
    };

    const verificationLevels = {
        NONE: 'Ninguno',
        LOW: 'Bajo',
        MEDIUM: 'Medio',
        HIGH: 'Alto',
        VERY_HIGH: 'Extremo'
    };


        const embed = new MessageEmbed()

        .setTitle(`Información Del Server ${name}`)
        .setThumbnail(icon)
        .addFields({
            name: `Dueño Del Servidor`,
            value: owner
        },{
            name: `Owner ID`,
            value: ownerID
        },{
            name: `Total De Usuarios`,
            value: memberCount
        },{
            name: 'Usuarios',
            value: `${members.filter(member => !member.user.bot).size}`
            
        },{
            name: 'Bots',
            value: `${members.filter(member => member.user.bot).size}`

        },{
            name: `Región`,
            value: `${regions[message.guild.region]}`
        },{
            name: `Nivel De Verificación`,
            value: `${verificationLevels[message.guild.verificationLevel]}`
        },{
            name: `Emojis Animados [${Animated}]`,
            value: `${EmojisAnimated}`

        },{
            name: `Boost`,
            value: `${guild.premiumTier ? `<:boost:767140749179093022> Nivel ${guild.premiumTier}` : `<a:nitro:767141393750949938> Sin Boost`}`
        },{
            name: 'Canales De Texto',
            value: `${channels.filter(channel => channel.type === 'text').size}`

        },{
            name: 'Canales De Voz',
            value: `${channels.filter(channel => channel.type === 'voice').size}`

        },{
            name: 'Actividad De Usuarios',
            value:` <:Conectado:767132396507889714> ${members.filter(member => member.presence.status === 'online').size} <:Ausente:767132396251774997> ${members.filter(member => member.presence.status === 'idle').size} <:nomolestar:767132396583518228> ${members.filter(member => member.presence.status === 'dnd').size} <:Streaming:767132396138922036> ${members.filter(member => member.presence.status === 'streaming').size} <:offline:767135604570980393> ${members.filter(member => member.presence.status === 'offline').size}`
        })
        message.channel.send(embed)
    }
}