const { EmbedBuilder } = require('discord.js');
const cron = require('node-cron');

function setupDailyReminders(client) {
    // Schedule the reminder to run every day at 21:00 CEST
    cron.schedule('00 21 * * *', () => { sendKitchenReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 10 * * 1', () => { sendTasksReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 16 * * 5', () => { sendSummaryReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 11 1 * *', () => { sendMonthlyReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 10 * * 1', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 17 * * 1', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 17 * * 3', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 10 * * 5', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 11 * * 6', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('45 9 * * 1', () => { sendDeskCleaningReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 14 * * 2', () => { sendPostponedTasksReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 20 * * 4', () => { sendChoresDoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 14 * * 6', () => { sendFriendziesReminder(client); }, { timezone: "Europe/Paris" });
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

async function sendBodydoublingReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Pora na sesję wspólnej pracy! <@&1269984406685093899>')
        .setDescription('Dołącz do kanału głosowego 💻-praca. 🧑‍💻')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Body doubling reminder sent successfully.');
    } catch (error) {
        console.error('Error sending body doubling reminder:', error);
    }
}

async function sendDeskCleaningReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Kochanie, pora na szybkie sprzątanie biurka!')
        .setDescription('Przełóż zbędne rzeczy na ich właściwe miejsca i zetrzyj kurz z blatu. ✨💻')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Desk cleaning reminder sent successfully.');
    } catch (error) {
        console.error('Error sending desk cleaning reminder:', error);
    }
}

async function sendTasksReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Zrób sobie listę zadań na ten tydzień, kochaniutkx! <@&1269984406685093899>')
        .setDescription('Wypisz najważniejsze i najpilniejsze taski, które musisz zrobić w tym tygodniu. 🗓️🔝')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Tasks reminder sent successfully.');
    } catch (error) {
        console.error('Error sending tasks reminder:', error);
    }
}

async function sendPostponedTasksReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Czas na ten telefon, który ciągle odkładasz na później, kochaniutkx!')
        .setDescription('Telefon, mail, pismo – to może być dowolna odłożona rzecz.  📞📮')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Postponed tasks reminder sent successfully.');
    } catch (error) {
        console.error('Error sending postponed tasks reminder:', error);
    }
}

async function sendChoresDoublingReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Chwila na małe porządki!')
        .setDescription('Uporządkuj swoje najbliższe otoczenie – nie musi być na błysk. 🧹🗑️')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Chores doubling reminder sent successfully.');
    } catch (error) {
        console.error('Error sending chores doubling reminder:', error);
    }
}

async function sendSummaryReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('No i jak tam zadanka, osobo wnusiowa? <@&1269984406685093899>')
        .setDescription('Pochwal się sukcesami, podziel się blokerami i tym, co cię trapi w pracy. 🙌⭐')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Summary reminder sent successfully.');
    } catch (error) {
        console.error('Error sending summary reminder:', error);
    }
}

async function sendFriendziesReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Chwila na wiadomości i telefony do ważnych dla ciebie osób!')
        .setDescription('Zapytaj co u nich słychać i daj znać, jak się masz. 📱✨')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Friendzies reminder sent successfully.');
    } catch (error) {
        console.error('Error sending friendzies reminder:', error);
    }
}

async function sendMonthlyReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '💻-wspólna-praca');
    if (!channel) return console.error("Couldn't find the 💻-wspólna-praca channel.");

    const embed = new EmbedBuilder()
        .setColor('#d8a7ca')
        .setTitle('Jak minął Ci ostatni miesiąc, kochaniutkx? Jakie masz plany na kolejny? <@&1269984406685093899>')
        .setDescription('Przy okazji zrób przegląd ważnych dat i dni wolnych. 🔮📅')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Monthly reminder sent successfully.');
    } catch (error) {
        console.error('Error sending monthly reminder:', error);
    }
}

module.exports = { setupDailyReminders };
