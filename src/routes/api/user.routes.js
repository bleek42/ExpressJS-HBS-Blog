const { Router } = require('express');

const User = require('../../models');

const userRoute = Router();

userRoute.post('/api/user/register', async (req, res) => {
    console.log(req.body);
    if (
        !req.body.username ||
        !req.body.password ||
        req.body.confirmPw !== req.body.password
    ) {
        res.status(400).send('Invalid fields in request body!');
        return;
    }

    try {
        const { username, password } = req.body;
        const newUser = await User.create({ username, password });

        if (!newUser) {
            res.status(400).send('Error registering new user..');
            return;
        }

        res.status(200).json({ message: 'New User Registered!', newUser });
    } catch (err) {
        console.log('ERROR POSTING TO /api/user/register:', err);
        res.status(500).send('Internal Server Error');
    }
});

user

module.exports = userRoute;
