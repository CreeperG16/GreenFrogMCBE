const fs = require('fs')
const Logger = require('../console/Logger')

class Loader {

    constructor() { }

    loadPlugins() {
        try {
            Logger.prototype.log('Loading plugins...')
            fs.readdirSync("./plugins")
        } catch (e) {
            Logger.prototype.log('Plugins folder not found. Creating it...')
            try {
                fs.mkdirSync("./plugins", { recursive: true })
                Logger.prototype.log('Plugins folder created')
            } catch (e) {
                Logger.prototype.log(`Failed to create plugins folder, this is a fatal error, shutting down: ${e}`, 'error')
            }
        }
        fs.readdir("./plugins", (err, plugins) => {
            plugins.forEach(plugin => {
                Logger.prototype.log(`Loading ${plugin}...`)
                try {
                    Logger.prototype.log(`Loaded ${require(`../../plugins/${plugin}`).prototype.getName()} (${require(`../../plugins/${plugin}`).name})`)
                    require(`../../plugins/${plugin}`).prototype.onLoad()
                } catch (e) {
                    Logger.prototype.log(`Failed to load plugin "${require(`../../plugins/${plugin}`).prototype.getName()}". The error was: ${e.stack}`, 'error')
                }
            });
            Logger.prototype.log(`All plugins loaded!`, 'info')
        });
    }

}

module.exports = Loader;