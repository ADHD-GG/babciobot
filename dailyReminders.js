const { EmbedBuilder } = require('discord.js');
const cron = require('node-cron');

function setupDailyReminders(client) {
    // Schedule the reminder to run every day at 21:00 CEST
    cron.schedule('00 21 * * *', () => { sendKitchenReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 10 * * 1', () => { sendTasksReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 16 * * 5', () => { sendSummaryReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 11 1 * *', () => { sendMonthlyReminder(client); }, { timezone: "Europe/Paris" });
}

async function sendKitchenReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '🔪-czysta-kuchnia');
    if (!channel) return console.error("Couldn't find the 🔪-czysta-kuchnia channel.");

    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('Codzienna przypominajka o posprzątaniu kuchni!')
        .setDescription('Pamiętaj by posprzątać kuchnię!🧼🍽️')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Kitchen cleaning reminder sent successfully.');
    } catch (error) {
        console.error('Error sending kitchen cleaning reminder:', error);
    }
}

async function sendTasksReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    try {
        await channel.send('Zrób sobie listę zadań na ten tydzień, kochaniutkx! <@&1269984406685093899>');
        console.log('Przypomnienie o liście zadań wysłane.');
    } catch (error) {
        console.error('Błąd wysyłania przypomnienia o liście zadań:', error);
    }
}

async function sendSummaryReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    try {
        await channel.send('No i jak tam zadanka, osobo wnusiowa? <@&1269984406685093899>');
        console.log('Przypomnienie o podsumowaniu wysłane.');
    } catch (error) {
        console.error('Błąd wysyłania przypomnienia o liście zadań:', error);
    }
}

async function sendMonthlyReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    try {
        await channel.send('Jak minął Ci ostatni miesiąc, kochaniutkx? Jakie masz plany na kolejny? <@&1269984406685093899>');
        console.log('Comiesięczny prompt zadaniowy wysłany.');
    } catch (error) {
        console.error('Błąd wysyłania comiesięcznego prompta zadaniowego:', error);
    }
}



module.exports = { setupDailyReminders };
