let handler = async (m, { conn }) => {  
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender 
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), 
  }), 'gay.png', 'siapa disini yang cita citanya menjadi gay dan memperkosa gw gays?', m) 
}
=======
 let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'gay.png', 'siapa disini yang cita citanya menjadi gay dan memperkosa gw ?', m)
>>>>>>> e3c57e2541ea7974b41e7f0547b9e320d988a77d

<<<<<<< HEAD
handler.help = ['gayme']
handler.tags = ['maker']

handler.command = /^(gayme)$/i
=======
handler.help = ['gay1']
handler.tags = ['maker']

handler.command = /^(gay1)$/i
>>>>>>> 437eb70666e91fb937d40ed4ab07e33869281843

module.exports = handler
