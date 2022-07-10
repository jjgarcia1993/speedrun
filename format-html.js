formatHtml = (story) => {
    return `
        <html>
            <head>
                <title>Story Writer</title>
            </head>

            <body>
                <h1>Story Writer</h1>

                <p id ="story">${story}</p>

                <input id ="word"></input>
                <button id="add">Add Word</button>

                <script src="script.js"></script>
            </body>
        </html>
    `
}

module.exports = {formatHtml}