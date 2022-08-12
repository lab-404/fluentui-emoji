var glob = require('glob')
var fs = require('fs')

glob('./assets/**/metadata.json', (err, files) => {

    let data = {}

    files.map((file, index) => {

        fs.readFile(file, (err, file) => {
            let fileData = JSON.parse(file)
            data[fileData.glyph] = {
                body: fileData.glyph,
                prefix: fileData.glyphAsUtfInEmoticons,
                description: `${fileData.tts} - ${fileData.group}`
            }

            if (files.length == (index + 1)) {
                fs.writeFile('./build/emojies.json', JSON.stringify(data), () => { })
            }
        })
    })
})
