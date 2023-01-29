const registration = require('../service/authService')
const User = require('../models/user')


const Register = async(req, res, next) => {
    const { email, password, confirmpass, name, location, number } = req.body;
    /*
    const avatarLink = gravatar.profile_url(email);
    const verificationToken = nanoid()
    */

    console.log(req.body)
    const newEmail = await User.findOne({ email });
    console.log(newEmail);
    if (!newEmail) {
        await registration(email, password, confirmpass, name, location, number);

        res.status(201).json({
            status: "Created",
            ResponseBody: {
                user: {
                    email: `${email}`,
                    subscription: "starter",
                },
            },
        })

    } else {

        res.status(409).json({
            status: "Conflict",
            ResponseBody: {
                message: "Email in use",
            },
        })
    }
    next()
};


module.exports = {
    Register
}