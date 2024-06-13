module.exports = class userModel {
    constructor (id, name, email, age) {
        this.id = id
        this.name = name
        this.email = email
        this.age = age
        this.cars = []
    }
}