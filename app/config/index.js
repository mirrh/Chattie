var env = process.env;

module.exports = {
    env: env.NODE_ENV || 'dev', // dev, production, test

    server: {
        port: env.PORT || 3000,
        host: env.HOST || '0.0.0.0'
    },

    mongoose: require('./mongoose'),

    session: {
        secret: 'secretsauce',
        key: 'sid',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: null
        },
        resave: false,
        saveUninitialized: false
    }
};