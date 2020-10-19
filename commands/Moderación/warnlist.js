const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')


module.exports = {
    name: "warnlist", // set command name
    aliases: [ "infractions" ], // set command aliases
    permissions: ['BAN_MEMBERS'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {
        
        const target = message.mentions.users.first()
    if (!target) {
      message.channel.send('Menciona al usuario.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id
    const user = target.username

    await mongo().then(async (mongoose) => {
      try {
        const results = await warnSchema.findOne({
          guildId,
          userId,
        })

        let reply = `\`Menu De Advertencias:\`\n`

        for (const warning of results.warnings) {
          const { author, timestamp, reason } = warning

          reply += `\`\`\`Moderador: ${author} | ${new Date(
            timestamp
          ).toLocaleDateString()} | "${reason}"\`\`\``
        }

        message.channel.send(reply)
      } finally {
        mongoose.connection.close()
      }
    })
  },
}