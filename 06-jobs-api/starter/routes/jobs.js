const express = require('express')
const router = express.Router()

const {
    deleteJob,
    updateJob,
    createJobs,
    getJob,
    getAllJobs
} = require('../controllers/jobs')


router.route('/').post(createJobs).get(getAllJobs)

router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
