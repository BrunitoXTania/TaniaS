let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `╭━〔𝐓𝐚𝐧𝐢𝐚 𝐁𝐨𝐭 T𝐞 I𝐧𝐯𝐨𝐜𝐚 🍕 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃🍔🍟 @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃\n`
teks += `╰━━━━━[ 𝐁𝐫𝐮𝐧𝐢𝐭𝐨𝐗𝐓𝐚𝐧𝐢𝐚 ${vs} ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
