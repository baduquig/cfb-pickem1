import Pick from "../models/picks.js";

export const getUserPicks = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Pick.findById(id);        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const submitPick = async (req, res) => {
    const { id, schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime } = req.body;
    const newPick = new Pick({ id, schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime });

    try {
        await newPick.save();
        res.status(201).json(newPickMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePick = async (req, res) => {
    const { id } = req.params;
    const { schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    } else {
        const updatedPick = { _id: id, schoolPicked, scoreDifferential, points, createdDateTime: createdDateTime,  lastUpdatedDateTime };        
        await updatedPick.findByIdAndUpdate(id, updatedPick);
        res.json(updatedPick);
    }
}