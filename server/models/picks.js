import mongoose from "mongoose";

const pickSchema = mongoose.Schema({    
    // Pick related data
    _id: {
        userId: Number,
        gameId: Number
    },
    userName: String,
    schoolPicked: {
        type: Number,
        default: ''
    },
    scoreDifferential: {
        type: String,
        default: ''
    },
    points: {
        type: String,
        default: 0
    },
    createdDateTime: Timestamp,
    lastUpdatedDateTime: Timestamp,

    // Game related data
    week: Number,
    day: Number,
    date: String,
    gameTime: Timestamp,
    finalScore: String,
    awaySchoolId: Number,
    awaySchoolName: String,
    awaySchoolMascot: String,
    homeSchoolId: Number,
    homeSchoolName: String,
    homeSchoolMascot: String
});


const Pick = mongoose.Model('Pick', pickSchema);

export default Pick;