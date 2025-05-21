const mongoose = require('mongoose')

const LiftSchema = new mongoose.Schema({
    lift:{
        type:String,
        required:[true, 'Please provide name of lift'],
        maxlength:20 
    },
    sets:{
        type:Number,
        require:[true, 'Please provide number of sets']
    },
    reps:{
        type:Number,
        require:[true, 'Please provide number of reps']
    },
    failure:{
        type:Number,
        require:[true, 'Please provide perceived exertion 1-10'],
        enum:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    createdBy:{
            type:mongoose.Types.ObjectId,
            ref:'NewLifter',
            required:[true, 'Please provide user']
        }
}, { timestamps:true })


const liftingModel = mongoose.model('bro', LiftSchema)

module.exports = liftingModel

