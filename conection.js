import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
    host: 'localhost',
    user: 'jonas',
    password: '1234',
    database: 'bancogeral'
})

export { conection }