const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')
const punishmentLogSchema = require('../../schemas/punishment-log-schema')


module.exports = {
    name: "warn", // set command name
    aliases: [ "strike" ], // set command aliases
    permissions: ['BAN_MEMBERS'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {

        const target = message.mentions.users.first()
    if (!target) {
      message.reply('Menciona a un usuario.')
      return
    }

    const guild = message
    const guildId = message.guild.id
    const userId = target.id
    const reason = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"

    
    const emote = message.guild.emojis.cache.find(emoji => emoji.name === 'charmystrike');
    const like = message.guild.emojis.cache.find(emoji => emoji.name === 'charmyyes');

    const warning = {
      author: message.member.user.tag,
      timestamp: new Date().getTime(),
      reason,
    }

    target.send(`${emote} Acabas de recibir una advertencia en el servidor \`${message.guild.name}\` | Razón: \`${reason}\``)
    message.channel.send("Advertencia enviada con exito")
    message.react('767481686186917969')

    await mongo().then(async (mongoose) => {
      try {
        await warnSchema.findOneAndUpdate(
          {
            guildId,
            userId,
          },
          {
            guildId,
            userId,
            $push: {
              warnings: warning,
            },
          },
          {
            upsert: true,
          }
        )

        await new punishmentLogSchema({
          guildId,
          userId,
          command: message.content,
        }).save()
      } finally {
        mongoose.connection.close()
      }
    })
  },
}
