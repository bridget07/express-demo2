/**
 * Created by gsh on 2017/7/6.
 */
const fs = require('fs')

const formattedTime = () => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    const s = d.getSeconds()
    const t = `${h}:${m}:${s}`
    return t
}

const log = (...args) => {
    const t = formattedTime()
    const arg = [t].concat(args)
    console.log.apply(console, arg)
    const content = t + '' + args + '\n'
    fs.writeFileSync('log.txt', content, {
        flag: 'a'
    })
}

module.exports = {
    log: log
}