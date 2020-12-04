const {
    Schema,
    model,
    ObjectId,
} = require('mongoose');

// Note for mongoose
// There will be several predeclared parameter when creating document (object / row)
// id - this will be randomly generated, can be disabled by adding _id: false in config
// timestamps - can also be disabled by adding timestamps: false or any config in config

// Types of data (not same with nodejs types)
// String
// Number
// Date
// Buffer
// Boolean
// Mixed - Need to import from mongoose
// ObjectId - ID which generated by Mongoose, also need to import from mongoose
// Array
// Decimal128
// Map
// Schema
// For reference, visit https://mongoosejs.com/docs/schematypes.html

// Can remove when done

const issueTicketSchema = new Schema({
    user:           { type: String, required: true, ref: 'user' }, // ref used for creating relationship
    conversation:   { type: ObjectId, required: true, ref: 'conversation' },
    category:       { type: String, default: '' },
    description:    { type: String, default: '' },
    assignee:       { type: String, default: null },
    resolved:       { type: Boolean, default: false },
}, {
    // Mongoose Schema Configuration
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

// Virtual for conversation, will not be stored inside database
issueTicketSchema
.virtual('url')
.get(function() { return `/issue_ticket/${this._id}` }); // Return url for specific issueTicket with id

module.exports = model('issueTicket', issueTicketSchema);