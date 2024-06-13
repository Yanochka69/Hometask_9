class UserController {
    constructor(userService) {
        this.userService = userService
    }

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUsers()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getUserById = async (req, res) => {
        try {
            const user = await this.userService.getUserById(req.params.id)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({error: 'Пользователь не найден'})
            }
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }

    getUserByAge = async (req, res) => {
        try {
            const users = await this.userService.getUserByAge(req.params.age)
            if (users.length > 0) {
                res.status(200).json(users)
            } else {
                res.status(404).json({error: 'Пользователей по вашему запросу не найдено'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getUserByDomain = async (req, res) => {
        try {
            const users = await this.userService.getUserByDomain(req.params.domain)
            if (users.length > 0) {
                res.status(200).json(users)
            } else {
                res.status(404).json({error: 'Пользователей по вашему запросу не найдено'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    sortUsers = async (req, res) => {
        try {
            const users = await this.userService.sortUsers()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createNewUser = async (req, res) => {
        try {
            if (req.body.name && req.body.email && req.body.age) {
                const newUser = await this.userService.createNewUser(req.body)
                res.status(201).json({message: `Пользователь ${JSON.stringify(newUser)} добавлен`})
            } else {
                res.status(400).json({message: 'Введены не все данные'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    updateUser = async (req, res) => {
        try {
            if (req.body.name && req.body.email && req.body.age) {
                const updateUser = await this.userService.updateUser(req.params.id, req.body)
                res.status(200).json({message: `Информация о пользователе ${JSON.stringify(updateUser)} обновлена`})
            } else {
                res.status(400).json({message: 'Введены не все данные'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    deleteUser = async (req, res) => {
        try {
            await this.userService.deleteUser(req.params.id)
            res.status(200).json({message: 'Пользователь удален'})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    //CARS
    getAllUsersCars = async (req, res) => {
        try {
            const cars = await this.userService.getAllUsersCars(req.params.id)
            if (cars === null) {
                res.status(404).json({message: 'Такого пользователя не существует'})
            } else if (cars.length > 0) {
                res.status(200).json(cars)
            } else if (cars.length === 0) {
                res.status(200).json({massage: 'У данного пользователя нет машин.'})
            } 
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    getUsersCar = async (req, res) => {
        try {
            const car = await this.userService.getUsersCar(req.params.id, req.params.carId)
            if (car) {
                res.status(200).json(car)
            } else {
                res.status(404).json({massage: 'Такого пользователя или такой машины не существует'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    createNewUsersCar = async (req, res) => {
        try {
            const newCar = await this.userService.createNewUsersCar(req.params.id, req.body)
            if (newCar) {
                res.status(201).json({message: `Данные о новой машине ${JSON.stringify(newCar)} добавлены`})
            } else {
                res.status(404).json({massage: 'Пользователя, которому вы хотите добавить машину, не существует'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    updateCar = async (req, res) => {
        try {
            if (req.body.model && req.body.year && req.body.color) {
                const updateCar = await this.userService.updateCar(req.params.id, req.params.carId, req.body)
                if (updateCar) {
                    res.status(200).json({message: `Информация о машине ${JSON.stringify(updateCar)} обновлена`})
                } else {
                    res.status(404).json({message: 'Такого пользователя или автомобиля не существует'})
                }
            } else {
                res.status(400).json({message: 'Введены не все данные'})
            }
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    deleteCar = async (req, res) => {
        try {
            await this.userService.deleteCar(req.params.id, req.params.carId)
            res.status(200).json({message: 'Машина пользователя удалена (или массив пользователей остался нетронутым, если вы ошиблись в индексах)'})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = UserController