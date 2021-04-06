const fetch = require('node-fetch')

const token = process.env.TOKEN_TELEGRAM;
const chatId = process.env.USER_TG;
const url = `https://api.telegram.org/bot${token}/sendMessage`;


const sentMessageFromTelegram = async ({ title, link }) => {
    const body = {
        "chat_id": chatId,
        "text": `${title} \n${link}`,
        "parse_mode": "html"
    };

    await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
    });
}

module.exports = sentMessageFromTelegram;
