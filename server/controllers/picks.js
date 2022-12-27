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

export const submitPick = async (req, res) => {
    const pick = req.body;
    const newPick = new PickMessage(pick)
    try {
        await newPick.save();
        res.status(201).json(newPick);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}