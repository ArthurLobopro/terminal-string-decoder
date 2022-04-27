const { getDecoder, encodingExists } = require('@vscode/iconv-lite-umd')
const { resolveTerminalEncoding } = require("./terminal-encoding")

async function detectTerminalEncodingAndGetDecoder() {
    const encoding = await resolveTerminalEncoding()
    if (encodingExists(encoding)) {
        return getDecoder(encoding)
    }

    return false
}

module.exports = { detectTerminalEncodingAndGetDecoder }