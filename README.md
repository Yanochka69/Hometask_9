## Описание конечных точек API

### [GET] /users/sorted - получение пользователей, отсортированных по именам в алфавитном порядке

- Тело ответа:

        [
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": [
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  },
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  }, ...
                ]
            },
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": object
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:3000/api/users/sorted').then(res => res.json())

- Пример ответа:

        [
            { id: 2, 
              name: 'Jane Smith', 
              email: 'jane.smith@example.com', 
              age: 25, 
              cars: [{id: 1, model: 'toyota', year: 2001, color: 'green'}] 
            },
            { 
              id: 1, 
              name: 'John Doe', 
              email: 'john.doe@example.com', 
              age: 30, 
              cars: []
            }
        ]

### [GET] /users - получение всех пользователей

- Тело ответа:

        [
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": [
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  },
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  }, ...
                ]
            },
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": object
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:3000/api/users').then(res => res.json())

- Пример ответа:

        [
            { 
              id: 1, 
              name: 'John Doe', 
              email: 'john.doe@example.com', 
              age: 30, 
              cars: []
            },
            { id: 2, 
              name: 'Jane Smith', 
              email: 'jane.smith@example.com', 
              age: 25, 
              cars: [{id: 1, model: 'toyota', year: 2001, color: 'green'}] 
            }
        ]

### [GET] /users/:id - получение пользователя по id

- Параметры:
    - id: number - идентификатор пользователя, информацию о котором нужно вывести

- Тело ответа:

        {
          "id": number,
          "name": string,
          "email": string,
          "age": number,
          "cars": [
            {
              "id": number,
              "model": string,
              "year": number,
              "color": string,
            },
            {
              "id": number,
              "model": string,
              "year": number,
              "color": string,
            }, ...
          ]
        }

- Пример запроса:

        fetch('http://localhost:3000/api/users/2').then(res => res.json())

- Пример ответа:

        { id: 2, 
          name: 'Jane Smith', 
          email: 'jane.smith@example.com', 
          age: 25, 
          cars: [{id: 1, model: 'toyota', year: 2001, color: 'green'}] 
        }

### [GET] /users/age/:age - получение пользователей, старше указанного возраста

- Параметры:
    - age: number - возраст, по которому будут определяться пользователи старше

- Тело ответа:

        [
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": [
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  },
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  }, ...
                ]
            },
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": object
            }, ...
        ]


- Пример запроса:

        fetch('http://localhost:3000/api/users/age/26').then(res => res.json())

- Пример ответа:

        [
            { 
              id: 1, 
              name: 'John Doe', 
              email: 'john.doe@example.com', 
              age: 30, 
              cars: []
            }
        ]

### [GET] /users/domain/:domain - получение пользователей с указанным доменом email

- Параметры:
    - domain: string - домен первого уровня (примеры: com, ru т. д.)

- Тело ответа:

        [
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": [
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  },
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  }, ...
                ]
            },
            {
                "id": number,
                "name": string,
                "email": string,
                "age": number,
                "cars": object
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:3000/api/users/domain/com').then(res => res.json())

- Пример ответа:

        [
            { id: 2, 
              name: 'Jane Smith', 
              email: 'jane.smith@example.com', 
              age: 25, 
              cars: [{id: 1, model: 'toyota', year: 2001, color: 'green'}] 
            },
            { 
              id: 1, 
              name: 'John Doe', 
              email: 'john.doe@example.com', 
              age: 30, 
              cars: []
            }
        ]

### [POST] /users - добавление пользователя

- Тело запроса: 

        {
            "name": string,
            "email": string,
            "age": number
        }

- Тело ответа:

Пользователь
        {
            "id": string
            "name": string,
            "email": string,
            "age": number,
            "cars": []
        }
        добавлен

- Пример запроса: 

        fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({
              name: "pum",
              email: "pum@mail.com",
              age: 115
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

Пользователь
        { 
          id: 3, 
          name: "pum", 
          email: "pum@mail.com", 
          age: 115, 
          cars: []
        }
        добавлен

### [PUT] /users/:id - обновление пользователя по id 

- Параметры:
    - id: number - идентификатор пользователя, информацию о котором нужно обновить

- Тело запроса: 

        {
            "name": string,
            "email": string,
            "age": number
        }

- Тело ответа:

Информация о пользователе
        {
            "id": number,
            "name": string,
            "email": string,
            "age": number,
            "cars": [
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  },
                  {
                    "id": number,
                    "model": string,
                    "year": number,
                    "color": string,
                  }, ...
                ]
        }
        обновлена

- Пример запроса: 

        fetch("http://localhost:3000/api/users/1", {
            method: "PUT",
            body: JSON.stringify({
              name: "Jake",
              email: "Jake@example.com",
              age: 30
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

Информация о пользователе
        {
            id: 1',
            name: "Jake",
            email: "Jake@example.com",
            age: 30,
            cars: []
        }
        обновлена

### [DELETE] /users/:id - удаление пользователя по id

- Параметры:
    - id: number - идентификатор пользователя, который будет удален

- Пример запроса: 

        fetch("http://localhost:3000/api/users/1", {
            method: "DELETE"
        })

- Пример ответа: 
"Пользователь удален"

### [GET] /users/:id/cars - получение всех машин пользователя, чей индентификатор указан

- Параметры:
    - id: number - идентификатор пользователя, машины которого будут выведены

- Тело ответа:

        [
            {
              "id": number,
              "model": string,
              "year": number,
              "color": string,
            },
            {
              "id": number,
              "model": string,
              "year": number,
              "color": string,
            }, ...
        ]

- Пример запроса:

        fetch('http://localhost:3000/api/users/2/cars').then(res => res.json())

- Пример ответа:

        [
          {
            id: 1, 
            model: 'toyota', 
            year: 2001, 
            color: 'green'
          }
        ] 

### [GET] /users/:id/cars/:carId - получение данных о машине конкретного пользователя, чей индентификатор указан

- Параметры:
    - id: number - идентификатор пользователя, о машине которого будут выведены данные
    - carId: number - идентификатор конкретной машины пользователя

- Тело ответа:

        {
          "id": number,
          "model": string,
          "year": number,
          "color": string
        }

- Пример запроса:

        fetch('http://localhost:3000/api//users/2/cars/1').then(res => res.json())

- Пример ответа:

        {
            id: 1, 
            model: 'toyota', 
            year: 2001, 
            color: 'green'
        }
          
### [POST] /users/:id/cars - добавление информации о новой машине пользователя, чей идентификатор указан

- Параметры:
    - id: number - идентификатор пользователя, которому нужно добавить информацию о новой машине

- Тело запроса: 

        {
          "model": string,
          "year": number,
          "color": string,
        }

- Тело ответа:

Данные о новой машине
        {
          "id": number,
          "model": string,
          "year": number,
          "color": string
        }
        добавлены

- Пример запроса: 

        fetch("http://localhost:3000/api/users/1/cars", {
            method: "POST",
            body: JSON.stringify({
              "model": 'bmw',
              "year": 2001,
              "color": 'yellow'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

Данные о новой машине
        { 
          id: 1, 
          model: 'bmw',
          year: 2001,
          color: 'yellow'
        }  
        добавлены

### [PUT] /users/:id/cars/:carId - обновление информации о машине, чей идентификатор указан, пользователя по id 

- Параметры:
    - id: number - идентификатор пользователя, информацию о котором нужно обновить
    - carId: number - идентификатор машины, о которой нужно обновить информацию

- Тело запроса: 

        {
          "model": string,
          "year": number,
          "color": string
        }

- Тело ответа:

Информация о машине
        {
          "id": number,
          "model": string,
          "year": number,
          "color": string,
        }
        обновлена

- Пример запроса: 

        fetch("http://localhost:3000/api/users/2/cars/1", {
            method: "PUT",
            body: JSON.stringify({
              "model": 'aaaa',
              "year": 2000,
              "color": 'orange'
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json());

- Пример ответа: 

Информация о машине
        {
            id: 1',
            model: 'aaaa',
            year: 2000,
            color: 'orange'
        }
        обновлена  

### [DELETE] /users/:id/cars/:carId - удаление машины (по carId) у пользователя по id

- Параметры:
    - id: number - идентификатор пользователя, который будет удален
    - carId: number - идентификатор машины, которую нужно удалить

- Пример запроса: 

        fetch("http://localhost:3000/api/users/1/cars/2", {
            method: "DELETE"
        })

- Пример ответа: 
"Машина пользователя удалена (или массив пользователей остался нетронутым, если вы ошиблись в индексах)"