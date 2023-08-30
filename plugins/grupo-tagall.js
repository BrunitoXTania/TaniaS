let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['@𝐢𝐭𝐬.𝐛𝐫𝐮𝐧𝐢𝐭𝐨𝐩']()} ${pesan}`
let teks = `╭━〔𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐏𝐥𝐚𝐧𝐭𝐢𝐭𝐚𝐬 💸 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃🕯️ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃\n`
teks += `╰━━━━━[ 𝐁𝐫𝐮𝐧𝐢𝐭𝐨𝐗𝐓𝐚𝐧𝐢𝐚 ${vs} ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
