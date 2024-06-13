const User = require('../models/userModel')
const Car = require('../models/carModel')

class InMemoryUserModel {
    constructor() {
        this.users = [
            { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30, cars: []},
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25, cars: [{id: 1, model: 'toyota', year: 2001, color: 'green'}] }]
        this.nextId = 3
    }

    async getAll() {
        return this.users
    }

    async getById(id) {
        const user = this.users.find(item => item.id === parseInt(id))
        return user
    }

    async getByAge(age) {
        const usersFilter = this.users.filter(item => item.age > parseInt(age))
        return usersFilter
    }

    async getByDomain(domain) {
        const usersDomain = this.users.filter(item => item.email.endsWith(domain))
        return usersDomain
    }

    async usersSorted() {
        const sortedUsers = this.users.sort((a, b) => a.name.localeCompare(b.name))
        console.log(sortedUsers)
        return sortedUsers
    }

    async create(userInfo) {
        const newUser = new User(this.nextId, userInfo.name, userInfo.email, parseInt(userInfo.age))
        this.users.push(newUser)
        this.nextId += 1
        return newUser
    }

    async update(id, userInfo) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            this.users[indUser].name = userInfo.name
            this.users[indUser].email = userInfo.email
            this.users[indUser.age] = userInfo.age
            return this.users[indUser]
        } else {
            return null
        }
    }

    async delete(id) {
        this.users = this.users.filter(item => item.id !== parseInt(id))
    }

    // CARS
    async getUsersCars(id) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            return this.users[indUser].cars
        } else {
            return null
        }
    }

    async getCar(id, carId) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            const indCar = this.users[indUser].cars.findIndex(item => item.id === parseInt(carId))
            if (indCar !== -1) {
                return this.users[indUser].cars[indCar]
            } else {
                return null
            }
        } else {
            return null
        }
    }

    async createCar(id, carInfo) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            let indCar = null
            if (this.users[indUser].cars.length === 0){
                indCar = 1
            } else {
                indCar = this.users[indUser].cars[this.users[indUser].cars.length - 1].id + 1
            }
            const newCar = new Car(indCar, carInfo.model, parseInt(carInfo.year), carInfo.color)
            this.users[indUser].cars.push(newCar)
            return newCar
        } else {
            return null
        }
    }

    async updateCar(id, carId, carInfo) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            const indCar = this.users[indUser].cars.findIndex(item => item.id === parseInt(carId))
            if (indCar !== -1) {
                this.users[indUser].cars[indCar].model = carInfo.model
                this.users[indUser].cars[indCar].year = parseInt(carInfo.year)
                this.users[indUser].cars[indCar].color = carInfo.color
                return this.users[indUser].cars[indCar]
            } else {
                return null
            }
        } else {
            return null
        }
    }

    async deleteCar(id, carId) {
        const indUser = this.users.findIndex(item => item.id === parseInt(id))
        if (indUser !== -1) {
            this.users[indUser].cars = this.users[indUser].cars.filter(item => item.id !== parseInt(carId))
        } else {
            return null
        }
    }
}

module.exports = new InMemoryUserModel()