const { database } = require("./database.js")

const roundup = (cattleToDrive) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < cattleToDrive; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }