class customAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}


const createCustomerror = (msg, statusCode)=>{
    return new customAPIError(msg,statusCode)
}

module.exports = {createCustomerror,customAPIError}