class UserService {
    constructor(userModel) {
        this.userModel = userModel
    }

    async getAllUsers(){
        return this.userModel.getAll()
    } 
    async getUserById(id) {
        return this.userModel.getById(id)
    } 
    async getUserByAge(age) {
        return this.userModel.getByAge(age)
    }
    async getUserByDomain(domain) {
        return this.userModel.getByDomain(domain)
    }

    async sortUsers() {
        return this.userModel.usersSorted()
    }

    async createNewUser(userInfo) { 
        return this.userModel.create(userInfo)
    }

    async updateUser(id, userInfo) {
        return this.userModel.update(id, userInfo)
    } 

    async deleteUser(id) {
        return this.userModel.delete(id)
    } 

    // CARS
    async getAllUsersCars(id) {
        return this.userModel.getUsersCars(id)
    }

    async getUsersCar(id, carId) {
        return this.userModel.getCar(id, carId)
    }

    async createNewUsersCar(id, carInfo) {
        return this.userModel.createCar(id, carInfo)
    }

    async updateCar(id, carId, carInfo) {
        return this.userModel.updateCar(id, carId, carInfo)
    }

    async deleteCar(id, carId) {
        return this.userModel.deleteCar(id, carId)
    }
}

module.exports = UserService