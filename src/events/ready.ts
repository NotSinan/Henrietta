import { Events, ActivityType } from 'discord.js';

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        setInterval(async () => {
            client.user.setActivity('SHOWS', { type: ActivityType.Watching });
        }, 4000);
    },
};
