const express = require('express')

module.exports = (userController) => {
    const router = express.Router()
    // USERS
    router.get('/users/sorted', userController.sortUsers)
    router.get('/users', userController.getAllUsers) 
    router.get('/users/:id', userController.getUserById) 
    router.get('/users/age/:age', userController.getUserByAge)
    router.get('/users/domain/:domain', userController.getUserByDomain)

    router.post('/users', userController.createNewUser) 

    router.put('/users/:id', userController.updateUser) 

    router.delete('/users/:id', userController.deleteUser) 

    // USERS CARS
    router.get('/users/:id/cars', userController.getAllUsersCars) // Все машинки конкретного пользователя
    router.get('/users/:id/cars/:carId', userController.getUsersCar) // Конкретная машинка конкретного пользователя

    router.post('/users/:id/cars', userController.createNewUsersCar) // Добавить новую машинку конкретному пользователю

    router.put('/users/:id/cars/:carId', userController.updateCar) // Обновление информации о машине у конкретного пользователя

    router.delete('/users/:id/cars/:carId', userController.deleteCar) // Удалить конкретную машину конкретного пользователя

    return router
}