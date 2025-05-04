// const fs = require("fs");

// const data = JSON.parse(fs.readFileSync("./dicTest.json", "utf-8"));
// // console.log(data.words);
// const randomItem = data.words[Math.floor(Math.random() * data.words.length)];

// // console.log(JSON.stringify(randomItem, null, 2));
// console.log(`ID: ${randomItem.id}`);
// console.log(`Kanji: ${randomItem.kanji[0].text}`);
// console.log(`Kana: ${randomItem.kana[0].text}`);
// console.log(`Español: ${randomItem.sense[0].gloss[0].text}`);

// Función para agregar texto al div de log
function logMessage(message) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML += `<p>${message}</p>`;  // Agrega un nuevo párrafo con el mensaje al log
}

// Cargar el JSON usando fetch()
fetch('dicTest.json')
    .then(response => response.json())
    .then(data => {
        // Elegir una palabra aleatoria
        const randomItem = data.words[Math.floor(Math.random() * data.words.length)];

        // Mostrar los datos en el div de diccionario
        const diccionarioDiv = document.getElementById('diccionario');
        diccionarioDiv.innerHTML = `
            <p><strong>ID:</strong> ${randomItem.id}</p>
            <p><strong>Kanji:</strong> ${randomItem.kanji[0].text}</p>
            <p><strong>Kana:</strong> ${randomItem.kana[0].text}</p>
            <p><strong>Español:</strong> ${randomItem.sense[0].gloss[0].text}</p>
        `;

        // Mostrar información en el log
        logMessage(`ID: ${randomItem.id}`);
        logMessage(`Kanji: ${randomItem.kanji[0].text}`);
        logMessage(`Kana: ${randomItem.kana[0].text}`);
        logMessage(`Español: ${randomItem.sense[0].gloss[0].text}`);
    })
    .catch(error => {
        logMessage(`Error cargando el archivo JSON: ${error}`);
    });
