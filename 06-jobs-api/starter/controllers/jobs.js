const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const Job = require('../models/Job')

const getAllJobs = async (req, res) => {
    res.send('Get all jobs')
}

const getJob = async (req, res) => {
    res.send('Get job')
}

const createJobs = async (req, res) => {
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)

    res.status(StatusCodes.CREATED).json({ job })
}

const updateJob = async (req, res) => {
    res.send('Update job')
}

const deleteJob = async (req, res) => {
    res.send('delete job')
}




module.exports = {deleteJob,updateJob,createJobs,getJob,getAllJobs}