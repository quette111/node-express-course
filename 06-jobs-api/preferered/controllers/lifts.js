const liftingModel = require('../models/lift')
const {BadRequestError, NotFoundError} = require('../errors')
const {StatusCodes} = require('http-status-codes')

const createLift = async (req, res) => {

       req.body.createdBy = req.user.userId
    
        const lift = await liftingModel.create(req.body)
        res.status(StatusCodes.CREATED).json({ lift})
   
}

const getLift = async (req, res) => {
    const { user:
            {userId},
            params:
                {id:liftId}} = req
        const lift = await liftingModel.findOne({
            _id:liftId,createdBy:userId
        })
            if(!lift){
                throw new NotFoundError(`No lift with id ${liftId}`)
            }
}


const getAllLifts = async (req, res) => {
   const lifts = await liftingModel.find({createdBy:req.user.userId}).sort('createdAt')
   res.status(StatusCodes.OK).json({lifts, count: lifts.length})
}

const deleteLift = async (req, res) => {
      const{
    body: {lift, sets, reps, failure},
    user: { userId },
    params: { id: liftId}
   } = req

   const lifts = await liftingModel.findOneAndRemove({
                        _id:liftId,         
                        createdBy:userId
                    })
   
   if(!lifts){
    throw new NotFoundError(`No lift with id ${liftId}`)
   }

   res.status(StatusCodes.OK).send()
}

const updateLift = async (req, res) => {
   const{
    body: {lift, sets, reps, failure},
    user: { userId },
    params: { id: liftId}
   } = req

   if (lift === '' || sets === '' || reps === '' || failure === ''){
    throw new BadRequestError('Lift type, sets, reps, amd failure status cannot be empty')
   }

   const lifts = await liftingModel.findByIdAndUpdate({_id:liftId,createdBy:userId}, req.body, {new:true, runValidators:true})
   
   if(!lifts){
    throw new NotFoundError(`No lift with id ${liftId}`)
   }

   res.status(StatusCodes.OK).json({ lifts })

}


module.exports = {
    updateLift,
    deleteLift,
    getAllLifts,
    getLift,
    createLift
}