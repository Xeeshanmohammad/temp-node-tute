
const express = require('express')
const router = express.Router()

const {getPeople,updatePerson,createPerson,
createPersonPostman,deletePerson} = require('../router controller/people1')


// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/postman/',createPersonPostman)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson)

//another method to control a routers=>router.route

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)



module.exports = router