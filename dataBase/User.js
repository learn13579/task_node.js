const {Schema, model} = require('mongoose');

const {userRoles} = require('../constants');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        select: true,
        minlength: 7,
        maxlength: 35
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        minlength: 7
    },
    role: {
        type: String,
        default: userRoles.USER,
        enum: Object.values(userRoles)
    },
    is_active: {
        type: Boolean,
        default: false,
        required: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

userSchema.virtual('id_type')
    .get(function() {
        return `${this.name} has ${this.email}`;
    });

module.exports = model('users', userSchema);
