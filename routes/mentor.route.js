var express = require('express')
const {
	createMentor,
	getMentors,
	assignStudents,
} = require('../controllers/mentor.controller')
var router = express.Router()

router.get('/', getMentors)
router.post('/create', createMentor)
router.post('/:_id', assignStudents)
module.exports = router
