import PickMessage from "../models/pickMessage";

export const getPicks = async (req, res) => {
    try {
        const picksMessage = await PickMessage.find();
        console.log(picksMessage);
        res.status(200).json(picksMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPick = async (req, res) => {
    const { id, schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime } = req.body;
    const newPickMessage = new PickMessage({ id, schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime });

    try {
        await newPickMessage.save();
        res.status(201).json(newPickMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const updatePick = async (req, res) => {
    const { id } = req.params;
    const { schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPick = { schoolPicked, scoreDifferential, points, createdDateTime,  lastUpdatedDateTime };
    await updatedPick.findByIdAndUpdate(id, updatedPick);
    res.json(updatedPick);
}