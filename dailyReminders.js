const { EmbedBuilder } = require('discord.js');
const cron = require('node-cron');

function setupDailyReminders(client) {
    // Schedule the reminder to run every day at 21:00 CEST
    cron.schedule('00 21 * * *', () => { sendKitchenReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 10 * * 1', () => { sendTasksReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 16 * * 5', () => { sendSummaryReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 11 * * 1-5', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 17 * * 1', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('55 17 * * 3', () => { sendBodydoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('45 9 * * 1', () => { sendDeskCleaningReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 14 * * 2', () => { sendPostponedTasksReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 19 * * 4', () => { sendChoresDoublingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 14 * * 6', () => { sendFriendziesReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 8 * * *', () => { sendMorningRoutineReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('05 10 * * *', () => { sendDrinkWaterReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('35 16 * * *', () => { sendDrinkWaterReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 12 * * *', () => { sendEatFoodReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 14 * * *', () => { sendStretchingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 20 * * *', () => { sendJournalingReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 22 * * *', () => { sendEveningRoutineReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 10 * * 6', () => { sendWaterPlantsReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 11 * * 6', () => { sendLaundryReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('00 11 1 * *', () => { sendMonthlyReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('15 14 5 * *', () => { sendServerReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('15 14 5 * *', () => { sendEveryonePing(client); }, { timezone: "Europe/Paris" });
    cron.schedule('45 17 14 * *', () => { sendIntegrowankoReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('45 17 14 * *', () => { sendIntegrowankoPing(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 14 25 * *', () => { sendBillsReminder(client); }, { timezone: "Europe/Paris" });
    cron.schedule('30 14 28 * *', () => { sendShoppingReminder(client); }, { timezone: "Europe/Paris" });
    
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
        .setTitle('Pora na sesję wspólnej pracy!')
        .setDescription('Dołącz do kanału głosowego 💻-praca-w-ciszy. 🧑‍💻')
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
        .setTitle('Zrób sobie listę zadań na ten tydzień, kochaniutkx!')
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
        .setDescription('Uporządkuj swoje najbliższe otoczenie – pokój czy mieszkanie – i pamiętaj: nie musi być na błysk. 🧹🗑️')
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
        .setTitle('No i jak tam zadanka, osobo wnusiowa?')
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
        .setTitle('Jak minął Ci ostatni miesiąc, kochaniutkx? Jakie masz plany na kolejny?')
        .setDescription('Przy okazji zrób przegląd ważnych dat i dni wolnych. 🔮📅')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Monthly reminder sent successfully.');
    } catch (error) {
        console.error('Error sending monthly reminder:', error);
    }
}

async function sendMorningRoutineReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Nie zapomnij o porannej rutynie, osobo wnusiowa!')
        .setDescription('Weź prysznic, umyj zęby, weź leki i napij się wody na dobry początek dnia! 💧💊')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Morning routine reminder sent successfully.');
    } catch (error) {
        console.error('Error sending morning routine reminder:', error);
    }
}

async function sendDrinkWaterReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#9DD1F1')
        .setTitle('Napij się wody!')
        .setDescription('Pamiętaj o nawodnieniu w ciągu dnia, wnusix. 🍵🚰')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Drink water reminder sent successfully.');
    } catch (error) {
        console.error('Error sending drink water reminder:', error);
    }
}

async function sendEatFoodReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#9DD1F1')
        .setTitle('Pamiętaj o zjedzeniu posiłku')
        .setDescription('Zjedz dziś chociaż jeden porządny, ciepły posiłek. 🥗🍜')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Eat food reminder sent successfully.');
    } catch (error) {
        console.error('Error sending eat food reminder:', error);
    }
}

async function sendStretchingReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Pora na przerwę na ćwiczenia rozciągające!')
        .setDescription('Odejdź od ekranu! Popatrz w dal, żeby dać odpocząć pięknym oczkom. Zrób zestaw lekkich ćwiczeń albo idź na krótki spacer. 🧘🌳')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Stretching reminder sent successfully.');
    } catch (error) {
        console.error('Error sending stretching reminder:', error);
    }
}

async function sendJournalingReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Zrób sobie chwilę wolnego na dzienniczek!')
        .setDescription('Zanotuj sobie parę słów dzisiejszych wydarzeniach, samopoczuciu, myślach. A może o czymś, na co czekasz, albo wyjątkowo cię ucieszyło? 📒💻')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Journaling reminder sent successfully.');
    } catch (error) {
        console.error('Error sending journaling reminder:', error);
    }
}

async function sendEveningRoutineReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#dcccff')
        .setTitle('Nie siedź do późna!')
        .setDescription('Zrób wieczorną rutynę i połóż się spać. 🛌🌒')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Evening routine reminder sent successfully.');
    } catch (error) {
        console.error('Error sending evening routine reminder:', error);
    }
}

async function sendWaterPlantsReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#41521F')
        .setTitle('Pamiętaj kochanie, żeby podlać roślinki!')
        .setDescription('Przy okazji zerknij, czy wszystko z nimi w porządku – być może potrzebują dodatkowej opieki. 🪴🌸')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Water plants reminder sent successfully.');
    } catch (error) {
        console.error('Error sending water plants reminder:', error);
    }
}

async function sendLaundryReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Pora na wstawienie prania!')
        .setDescription('Zbierz rzeczy z mieszkania, wrzuć detergent i włącz pralkę. I pamiętaj, by wyciągnąć pranie po zakończeniu programu! 🧼🧺')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Laundry reminder sent successfully.');
    } catch (error) {
        console.error('Error sending laundry reminder:', error);
    }
}

async function sendBillsReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#EF626C')
        .setTitle('Sprawdź, czy masz opłacone rachunki!')
        .setDescription('Zerknij na maila, do skrzynki pocztowej i upewnij się, że z konta pobrały się wszystkie zaplanowane płatności i subskrypcje. 📨💸')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Bills reminder sent successfully.');
    } catch (error) {
        console.error('Error sending bills reminder:', error);
    }
}

async function sendShoppingReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Zajrzyj do szafek i zrób listę zakupów')
        .setDescription('Sprawdź, czy masz wszystkie niezbędne produkty i zapasy dla siebie, bliskich i pupili. Zrób listę brakujących rzeczy i zabierz ją ze sobą do sklepu albo zamów wszystko online. 🛒🛍️')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Shopping reminder sent successfully.');
    } catch (error) {
        console.error('Error sending shopping reminder:', error);
    }
}

async function sendServerReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '📣-tablica-ogłoszeniowa');
    if (!channel) return console.error("Couldn't find the 📣-tablica-ogłoszeniowa channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Zajrzyj do serwerowych zasobów!')
        .setDescription('Na serwerze kryje się wiele ciekawych rzeczy! Zajrzyj na https://discord.com/channels/1269650292215906418/1304265263159443486, rzuć okiem na https://discord.com/channels/1269650292215906418/1274775024078946365 oraz https://discord.com/channels/1269650292215906418/1274782836221804554! Chcesz zostawić sugestię, zgłosić nową propozycję lub udzielić informacji zwrotnej? Wypełnij formularz: https://neurospicyspace.notion.site/1b55531af09381e88bc2e2d9f12d2128 Postaw kawę i uzyskaj dostęp do bonusów, osobo wnusiowa: https://buymeacoffee.com/neurospicyspace 📱👀')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Server reminder sent successfully.');
    } catch (error) {
        console.error('Error sending server reminder:', error);
    }
}

async function sendServerSupportReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '📣-tablica-ogłoszeniowa');
    if (!channel) return console.error("Couldn't find the 📣-tablica-ogłoszeniowa channel.");

    const embed = new EmbedBuilder()
        .setColor('#FFD166')
        .setTitle('Dołącz do serwerowego mecenatu!')
        .setDescription('Postaw kawę i uzyskaj dostęp do bonusów, wnusix! https://buymeacoffee.com/neurospicyspace 💸💗')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Server support reminder sent successfully.');
    } catch (error) {
        console.error('Error sending server support reminder:', error);
    }
}

async function sendIntegrowankoReminder(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const embed = new EmbedBuilder()
        .setColor('#1a60ff')
        .setTitle('Wyjdź na wirtualne podwórko!')
        .setDescription('Sprawdź termin najbliższej integracji na kanale głosowym i pograj albo pogdaj z innymi osobami serwerowymi, wnusix! https://discord.com/events/1269650292215906418/1364198617484623912 💓🎙️')
        .setTimestamp();

    try {
        await channel.send({ embeds: [embed] });
        console.log('Integrowanko reminder sent successfully.');
    } catch (error) {
        console.error('Error sending integrowanko reminder:', error);
    }
}

async function sendIntegrowankoPing(client) {
    const channel = client.channels.cache.find(ch => ch.name === '👵-babciobot-powiadomienia');
    if (!channel) return console.error("Couldn't find the 👵-babciobot-powiadomienia channel.");

    const role = roleMention(1269985806798295101);

    try {
        await channel.send({ embeds: [embed] });
        console.log('Integrowanko ping sent successfully.');
    } catch (error) {
        console.error('Error sending integrowanko ping:', error);
    }
}

async function sendEveryonePing(client) {
    const channel = client.channels.cache.find(ch => ch.name === '📣-tablica-ogłoszeniowaa');
    if (!channel) return console.error("Couldn't find the 📣-tablica-ogłoszeniowa channel.");

    const role = roleMention(1269650292215906418);

    try {
        await channel.send({ embeds: [embed] });
        console.log('Everyone ping sent successfully.');
    } catch (error) {
        console.error('Error sending everyone ping:', error);
    }
}

module.exports = { setupDailyReminders };
