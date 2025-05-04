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

        // Mostrar información en la consola
        console.log(JSON.stringify(randomItem, null, 2));
        // console.log(`ID: ${randomItem.id}`);
        // console.log(`Kanji: ${randomItem.kanji[0].text}`);
        // console.log(`Kana: ${randomItem.kana[0].text}`);
        // console.log(`Español: ${randomItem.sense[0].gloss[0].text}`);
    })
    .catch(error => {
        console.error(`Error cargando el archivo JSON: ${error}`);
    });
