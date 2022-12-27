import mongoose from "mongoose";

const pickSchema = mongoose.Schema({    
    _id: {
        userId: Number,
        gameId: Number
    },
    schoolPicked: Number,
    scoreDifferential: String,
    points: {
        type: String,
        default: 0
    },
    createdDateTime: Timestamp,
    lastUpdatedDateTime: Timestamp
});


const Pick = mongoose.Model('Pick', pickSchema);

export default Pick;