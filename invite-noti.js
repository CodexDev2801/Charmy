const { MessageEmbed } = require("discord.js")

module.exports = client => {

    const invites = {}


    const getInviteCounts = async (guild) => {
        return await new Promise(resolve => {
            guild.fetchInvites().then(invites =>{
                const inviteCounter = {}

                invites.forEach(invite =>{
                    const { uses,inviter } = invite
                    const { username,discriminator } = inviter

                    const name = `${username}#${discriminator}`

                    inviteCounter[name] = (inviteCounter[name] || 0) + uses
                })

                resolve(inviteCounter)

            })
        })
    }
client.guilds.cache.forEach(async (guild) =>{
    invites[guild.id] = await getInviteCounts(guild)
    console.log(`Invitaciones`,invites[guild.id])
})

client.on('guildMemberAdd', async member  =>{
    const { guild, id } = member

    const invitesBefore = invites[guild.id]
    const invitesAfter = await getInviteCounts(guild)


    for (const inviter in invitesAfter){
        channel = client.channels.cache.get("767111571682885662")
            const count = invitesAfter[inviter]

            let embed = new MessageEmbed()
            .setDescription(`El usuario con la ID ${id} ha sido invitado por ${inviter} | Tiene un total de ${count} invitaciones`)
            .setColor("BLUE")
            
            channel.send(embed)

            invites[guild.id] = invitesAfter

        return
    }

})

}