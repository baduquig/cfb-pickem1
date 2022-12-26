import mongoose from "mongoose";

const pickSchema = mongoose.Schema({
    accountID: Number,
    week: Number,
    gameID: Number,
    teamPicked: Number,
    scoreDifferential: {
        type: String,
        default: null
    },
    points: {
        type: Number,
        default: 0
    }
});


const PickMessage = mongoose.Model('PickMessage', pickSchema);

export default PickMessage;