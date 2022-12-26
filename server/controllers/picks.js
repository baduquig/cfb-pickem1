import PickMessage from "../models/pickMessage";

export const getPicks = async (req, res) => {
    try {
        const pickMessages = await PickMessage.find();
        console.log(pickMessages);
        res.status(200).json(pickMessages);
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