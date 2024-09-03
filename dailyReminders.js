const { EmbedBuilder } = require('discord.js');
const cron = require('node-cron');

function setupDailyReminders(client) {
    // Schedule the reminder to run every day at 21:00 CEST
    cron.schedule('06 14 * * *', () => {
        sendKitchenReminder(client);
    }, {
        timezone: "Europe/Paris" // CEST timezone
    });
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

module.exports = { setupDailyReminders };
