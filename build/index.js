import glob from 'glob'
import { readFile, writeFile } from 'fs/promises'

glob('./assets/**/metadata.json', (err, files) => {

    let data = {}

    files.map((file, index) => {

        readFile(file, (err, file) => {
            let fileData = JSON.parse(file)
            data[fileData.glyph] = {
                body: fileData.glyph,
                prefix: fileData.glyphAsUtfInEmoticons,
                description: `${fileData.tts} - ${fileData.group}`
            }

            if (files.length == (index + 1)) {
                writeFile('./build/emojies.json', JSON.stringify(data), () => { })
            }
        })
    })
})
