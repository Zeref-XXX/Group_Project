const { fileModel, userModel } = require("../models/user");


const Card = async (req, res) => {
    try {
        const { userId } = req.body;
        const data = await fileModel.find({ id: userId });
        res.status(200).json({ data });
    } catch (err) {
        console.log(err);
    }
}
const UserD = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required.' });
        }

        const data = await userModel.findOne({ _id: userId }); 
        console.log(data)
        if (!data) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.status(200).json({ data });
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { Card, UserD };