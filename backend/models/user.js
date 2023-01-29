const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Joi = require('joi');



const user = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Set your email please"],
        min: 8,
        validate: {
            validator: function(value) {
                return value.includes('@')
            },
            message: `Your email should include "@" character`
        }
    },

    password: {
        type: String,
        required: [true, "You need password"],
        min: [6, 'At least 6 characters']
    },
    name: {
        type: String,
        required: [true, 'Please enter name'],
        min: [3, 'At least 3 characters expected']
    },
    location: {
        type: String,
        required: [true, "Please enter your location"],
        min: [6]
    },
    number: {
        type: Number,
        required: [true],
        min: [10]
    },
    avatar: {
        type: String,

    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    token: {
        type: String,
        default: null,

    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
        required: [true, 'Verify token is required'],
    }

});


module.exports = {
    user
}