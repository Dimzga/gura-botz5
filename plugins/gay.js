<<<<<<< HEAD
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

handler.help = ['gayme']
handler.tags = ['maker']

handler.command = /^(gayme)$/i

module.exports = handler
