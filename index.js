const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const { setupDailyReminders } = require('./dailyReminders');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
	],
});
const guild = client.guilds.cache.get(guildId);

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

const maleMessages = [
   "A obiadek zjadłeś?",
   "Pewnie panny się biją o tego pięknego kawalera?",
   "Ale wyrosłeś, chyba Cię fasolą podlewają!",
   "Za moich czasów było inaczej...",
   "Za dużo siedzisz przed tym komputerem, wyjdź na spacer!",
   "Ciągle tylko siedzisz na tym komputerze, a ziemniaczki nieobrane.",
   "Nie garb się, wyprostuj plecy. I ty też <@476807157052866563>",
   "GDZIE OSOBO WNUSIOWA BEZ TEJ CZAPKI, PRZEWIEJE CIE",
   "Weź jeszcze dokładkę, specjalnie dla ciebie przygotowane",
   "Jak ty szybko rośniesz, zaraz mnie przerośniesz!",
   "A wodę dzisiaj to piłeś?",
   "Pamiętaj, żeby się nawadniać!",
   "Weź sobie słoik dżemu z piwnicy, bo zrobiłam, bo w tym mieście to dobrych nie mają.",
   "Nie mogę wnusiu spauzować, to online jest.",
];

const femaleMessages = [
   "A obiadek zjadłaś?",
   "Pewnie wszyscy się biją o taką piękną pannę?",
   "Za moich czasów było inaczej...",
   "Za dużo siedzisz przed tym komputerem, wyjdź na spacer!",
   "Ciągle tylko siedzisz na tym komputerze, a ziemniaczki nieobrane.",
   "Nie garb się, wyprostuj plecy. I ty też <@476807157052866563>",
   "GDZIE OSOBO WNUSIOWA BEZ TEJ CZAPKI, PRZEWIEJE CIE",
   "Weź jeszcze dokładkę, specjalnie dla ciebie przygotowane",
   "A wodę dzisiaj to piłaś?",
   "Pamiętaj, żeby się nawadniać!",
   "Weź sobie słoik dżemu z piwnicy, bo zrobiłam, bo w tym mieście to dobrych nie mają.",
   "Nie mogę wnusio spauzować, to online jest.",
];

const neutralMessages = [
   "A obiadek zjedzony?",
   "Pewnie wszyscy się biją o Ciebie, co?",
   "Za moich czasów było inaczej...",
   "Za dużo siedzisz przed tym komputerem, wyjdź na spacer!",
   "Ciągle tylko siedzisz na tym komputerze, a ziemniaczki nieobrane.",
   "Nie garb się, wyprostuj plecy. I ty też <@476807157052866563>",
   "GDZIE OSOBO WNUSIOWA BEZ TEJ CZAPKI, PRZEWIEJE CIE",
   "Weź jeszcze dokładkę, specjalnie dla ciebie przygotowane",
   "A woda dzisiaj była pita?",
   "Pamiętaj, żeby się nawadniać!",
   "Weź sobie słoik dżemu z piwnicy, bo zrobiłam, bo w tym mieście to dobrych nie mają.",
   "Nie mogę spauzować, to online jest.",
];

let messageCount = 0;

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore messages from bots

    messageCount++;

    if (messageCount % 200 === 0) {
        const member = await message.guild.members.fetch(message.author.id);
        let messageSet = neutralMessages;

        if (member.roles.cache.some(role => role.name.toLowerCase() === 'on/jego')) {
            messageSet = maleMessages;
        } else if (member.roles.cache.some(role => role.name.toLowerCase() === 'ona/jej')) {
            messageSet = femaleMessages;
        }

        const randomMessage = messageSet[Math.floor(Math.random() * messageSet.length)];
        message.reply(randomMessage);
    }
});

client.once('ready', () => {
    console.log('Ready!');
    setupDailyReminders(client);
});

client.login(token);

