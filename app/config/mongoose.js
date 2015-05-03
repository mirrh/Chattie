module.exports = {
    uri: 'mongodb://localhost/' + (process.env.NODE_ENV == 'prod' ? 'chattie' : 'chattie_test'),
    options: {
        user: "",
        pass: "",
        server: {
            socketOptions: {
                keepAlive: 1
            }
        }
    }
};