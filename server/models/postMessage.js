import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    gameID: Number
    // TODO: Build out the rest of the postSchema
});


const postMessage = mongoose.Model('postMessage', postSchema);

export default postMessage;