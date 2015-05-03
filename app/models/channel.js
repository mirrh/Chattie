var mongoose = require('../lib/mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var ChannelSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        match: /^[a-z0-9_]+$/i,
        required: true
    },
    displayName: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    messages: [{
        type: ObjectId,
        ref: 'Message'
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

ChannelSchema.method('toJSON', function() {
    return {
        id: this._id,
        name: this.name,
        displayName: this.displayName,
        description: this.description,
        created: this.created,
        owner: this.owner
    };
});

module.exports = mongoose.model('Channel', ChannelSchema);