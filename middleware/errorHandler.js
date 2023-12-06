const  { logEvents } = require('./logEvents')



const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, 'errLog.txt')
    
    res.status(500).send('Something broke!')
}

module.exports =  errorHandler 