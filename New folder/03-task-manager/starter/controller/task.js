// const Task = require('../model/task')
// const asyncWrapper = require('../middleware/async')

// // const getAllTasks = async (req,res)=>{
// //     try {
// //         const tasks = await Task.find({})
// //         // res.status(200).json({tasks})
// //         // res.status(200).json({tasks,amount:tasks.length})
// //         res.status(200).json({status:"success",data:{tasks,nbHits:tasks.length}})


        
// //     } catch (error) {
// //      res.status(500).json({msg:error})   
// //     }
   
// // }

// const getAllTasks = asyncWrapper(async (req,res)=>{
//     const task = await Task.find({})
//     res.status(201).json({task})
        
// })

// const createTasks = async (req,res)=>{
//     try {
//         const task = await Task.create(req.body)
//         // res.send('Create a task')
//         res.status(201).json({task})
        
//     } catch (error) {
//         res.status(500).json({msg:error})
//     }
// }
// const getTasks = async (req,res)=>{
//     // res.send('Get a single tasks')
//     try {
//         const {id:taskId} = req.params
//         const task = await Task.findOne({_id:taskId})
//         if(!task){
//             return res.status(404).json({msg:`No task with id :${taskId}`})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         res.status(500).json({msg:error})
        
//     }
    
// }

// const deleteTasks = async (req,res)=>{
//     try {
//         const {id:taskId} = req.params
//         const task = await Task.findOneAndDelete({_id:taskId})
//         if(!task){
//             return res.status(404).json({msg:`No task with id :${taskId}`})
//             res.status(200).json({task})}
            
//         } catch (error) {
//             res.status(500).json({msg:error})
//         }
//     }
//     const updateTasks = async (req,res)=>{
//         // res.send('Update a task')
//         // res.json(req.params.id)
       

//         try {
//             const {id:taskId} = req.params
//             const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
//                 new:true,
//                 runValidators:true
//             })
//             // res.status(200).json({id:taskId, data :req.body})
//             if(!task){
//                 return res.status(404).json({msg:`No task with id :${taskId}`})
//             res.status(200).json({task})}


//         } catch (error) {
//             res.status(500).json({msg:error})
//         }
//     }
 
    
//     module.exports = {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks}


    const Task = require('../model/task')
    const asyncWrapper = require('../middleware/async')
    const {createCustomError} = require('../error/custom-error')

    const getAllTasks = asyncWrapper(async (req,res)=>{
        const task = await Task.find({})
        res.status(201).json({task})
            
    })

const createTasks = asyncWrapper(async (req,res)=>{
  
        const task = await Task.create(req.body)
        res.status(201).json({task})
     
})

const getTasks = asyncWrapper(async (req,res,next)=>{
  
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})
        if(!task){
           return next(createCustomError(`No task with id :${taskId}`))

        }
        res.status(200).json({task})
    })

const deleteTasks = asyncWrapper(async (req,res)=>{
   
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return next(createCustomError(`No task with id :${taskId}`))

            res.status(200).json({task})}
    })
    const updateTasks = asyncWrapper(async (req,res)=>{
        
            const {id:taskId} = req.params
            const task = await Task.findOneAndUpdate({_id: taskId}, req.body,{
                new:true,
                runValidators:true
            })
           
            if(!task){
                return next(createCustomError(`No task with id :${taskId}`))

            res.status(200).json({task})}


        })
    
 

    module.exports = {getAllTasks,createTasks,getTasks,updateTasks,deleteTasks}
