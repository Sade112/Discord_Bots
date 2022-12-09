

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents: 32767});
const { ActivityType } = require("discord.js");
const endDate = new Date('March 21, 2023 23:59:59');

client.on("ready", () => {
    console.log("El bot esta listo como " + client.user.tag);



    //función que se ejecutará cada minuto para actualizar el nombre del bot en Discord
    function updateBotName() {

        let timeDiff = endDate - Date.now();
        if (timeDiff > 0) {
            // Calcula el tiempo restante en días, horas, minutos y segundos
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            timeDiff -= days * (1000 * 60 * 60 * 24);
            const hours = Math.floor(timeDiff / (1000 * 60 * 60));
            timeDiff -= hours * (1000 * 60 * 60);
            const minutes = Math.floor(timeDiff / (1000 * 60));
            timeDiff -= minutes * (1000 * 60);
            const seconds = Math.floor(timeDiff / 1000);
            
            //función que se ejecutará cada minuto para actualizar el nombre del bot en Discord
            
            //actualizar el nombre del bot en Discord 
            client.user.setActivity(`${days} dias, ${hours} horas y ${minutes} minutes`, {type: ActivityType.Watching,});
            

        
        };

    };

    //ejecutar la función cada minuto
    var interval = setInterval(updateBotName, 60000);














    client.application.commands.set([
        {
            name: "hz",
            description: "Te dicee la verdad!",
            options: [],
        }
    ])


});



client.on("interactionCreate", (int) => {
    if (int.isCommand() && int.commandName === "hz"){
        int.reply("Es la mejor comunidad del planeta!")
    }
})



client.login("MTA0OTg1ODA1OTk5Mzg4MjY2NA.Gdmye4.ipKPJwrVuu3UwzWWAUI5meoaV8CSOQ1fqbhEko");