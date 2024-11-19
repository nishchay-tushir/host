const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    Email: { type: String, required: true, unique: true },
    email: { type: String, required: false},
    password: { type: String, required: true },
    authLevel: { type: Number, required: true },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
