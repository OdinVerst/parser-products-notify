const notifier = require('node-notifier');

const sendPush = ({ title, link }) => {
    notifier.notify({
        title: "Avito Parser",
        text: title,
        open: link
    });
}

module.exports = sendPush;