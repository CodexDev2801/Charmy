module.exports = {
    name: "invites", 
    aliases: [ "invtrack" ], 
    permissions: [], 
    ownerOnly: false, 
    enabled: true, 
    cooldown: 10, 
    exec: async (client, message, args) => {
        
        const { guild } = message

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) =>{
                const { uses, inviter } = invite
                const { username, discriminator } = inviter

                const name = `${username}#${discriminator}`

                inviteCounter[name] = (inviteCounter[name] || 0) + uses  
            })

            let replyText = `Invitaciones`

            for (const invite in inviteCounter){
                const count = inviteCounter[invite]
                replyText += `\`\`\`\nEl usuario ${invite} ha invitado a ${count} usuarios\`\`\``
            }

            message.channel.send(replyText)

        })
    }
}