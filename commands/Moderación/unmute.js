const muteSchema = require('../../schemas/mute-schema.js')



module.exports = {
    name: "unmute", // set command name
    aliases: [ "desmutear" ], // set command aliases
    permissions: ['MANAGE_MESSAGES'], // set command permissions
    ownerOnly: false, // set true if command is owner only
    enabled: true, // set true if command enabled
    cooldown: 5, // in seconds
    exec: async (client, message, args) => {

        const { guild } = message

        if (args.length !== 1) {
          message.reply(
            `Uso correcto: unmute <@Usuario / ID>`
          )
          return
        }
    
        let id = ''
    
        const target = message.mentions.users.first()
        if (target) {
          id = target.id
        } else {
          id = args[0]
        }
    
        const result = await muteSchema.updateOne(
          {
            guildId: guild.id,
            userId: id,
            current: true,
          },
          {
            current: false,
          }
        )
    
        if (result.nModified === 1) {
          const mutedRole = guild.roles.cache.find((role) => {
            return role.name === 'Muted'
          })
    
          if (mutedRole) {
            const guildMember = guild.members.cache.get(id)
            guildMember.roles.remove(mutedRole)
          }
    
          message.channel.send(`Desmuteaste a <@${id}>`)
        } else {
          message.channel.send('El usuario no se encuentra muteado')
        }
    }
}