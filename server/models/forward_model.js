const mongoose = require("mongoose");

const forwardSchema = new mongoose.Schema(
  {
    previous_reciever: {
      type: String,
    },
    current_reciever: {
      type: String,
    },
    grievance_id: {
      type: String,
    },
    reciever_phone: {
      type: String,
    },
    message_sent_to_grievant: {
      type: Boolean,
      default: false,
    },
    replies: [
      {
        message: {
          type: String,
        },
        DateTime: {
          type: String,
        },
      },
    ],
    created_date: {
      type: Date,
    },
    officer_avatar: {
      type: String,
    },
    officer_name: {
      type: String,
    },
    officer_university: {
      type: String,
    },
    assigned_to_role: {
      type: String,
    },
    short_id: {
      type: String,
    },
    satisfied: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Forward = mongoose.model("Forward", forwardSchema);

module.exports = {
  Forward,
};
