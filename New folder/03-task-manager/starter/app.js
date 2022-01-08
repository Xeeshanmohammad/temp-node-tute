const connectDB = require('./db/connnects')
const express = require('express')
const app = express()
const task = require('./routes/task')
// const not_found=require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


require('dotenv').config()

// middleware Static
app.use(express.static('./public'))
app.use(express.json())



// routes

// app.get('/hello', (req,res)=>{
//     res.send('Task manager App')
// })
// app.use(not_found)
app.use('/api/v1/tasks', task)
app.use(errorHandlerMiddleware)


//app.get('/api/v1/tasks')-get all the tasks
//app.post('/api/v1/tasks')-create a new tasks
//app.get('/api/v1/tasks/:id')-get  a single task
//app.patch('/api/v1/tasks/:id')-update tasks
//app.delete('/api/v1/tasks/:id') -delete tasks

// const port = 3000
const port = process.env.PORT || 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port : ${port}`))
    } catch (error) {
        console.log(error)

    }
}

start()

