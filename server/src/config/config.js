module.exports = {
    port: process.env.PORT || 8083,
    //Access-Control-Allow-Origin: 8083,
    db: {
        database: process.env.DB_NAME || 'fusReddit',
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'admin',
        options: {
            dialect: process.env.DIALECT || 'postgres',
            host: process.env.HOST || 'localhost',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};