const os = require("os");
const platform = os.platform()
const uptime = os.uptime()
const version = os.version()

const osObject = {
    Platform: platform,
    Uptime: uptime,
    Version: version
}

console.log(osObject)
