var express = require('express')
var router = express.Router()

const {
	createStudent,
	getStudents,
	assignMentor,
} = require('../controllers/student.controller')

router.get('/', getStudents)
router.post('/create', createStudent)
router.post('/:_id', assignMentor)
module.exports = router