const fs = require('fs');
const HTMLParser = require('node-html-parser');
const notifier = require('node-notifier');

const getValues = require("./fetch");

const checkAvito = async () => {
    const values = await getValues();
    const root = await HTMLParser.parse(values);


    fs.readFile('message.txt', 'utf-8', (err, buffer) => {
        const data = buffer ? JSON.parse(buffer) : {};

        const list = root.querySelector('[data-marker="catalog-serp"]');
        const items = list.querySelectorAll('[data-marker="item"]');

        const obj = {
            items: []
        };

        if (!data.items || data.items[0] !== items[0]._attrs['data-item-id']) {
            items.forEach(el => {
                obj.items.push(el._attrs['data-item-id']);
            });

            const link = items[0].querySelector('a[data-marker="item-title"]');
            const price = items[0].querySelector('[itemprop="price"]');

            notifier.notify({
                title: "Avito Parser",
                text: `${link._attrs.title} - ${price._attrs.content}₽`,
                open: `https://www.avito.ru/${link._attrs.href}`
            });

            fs.writeFile('message.txt', JSON.stringify(obj), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
        }
    });
};

module.exports = checkAvito;
