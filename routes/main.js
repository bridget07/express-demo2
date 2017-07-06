const User = require('../models/user')

const { log } = require('../utils')
const currentUser = request => {
    const fakeId = -1
    const uid = User.get(uid)
    if (u === null) {
        const fakeUser = {
            id: fakeId,
            username: '游客'
        }
        return fakeUser
    } else {
        return u
    }
}

module.exports = {
    currentUser: currentUser
}