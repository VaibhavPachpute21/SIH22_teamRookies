const mongoose = require("mongoose");
const moment = require('moment-timezone'); 
moment().tz("Asia/Kolkata").format();
const grievanceSchema = new mongoose.Schema(
  {
    grievant_id: {
      type: String,
    },
    grievant_name: {
      type: String,
    },
    grievant_institute: {
      type: String,
    },
    reciever_id: {
      type: String,
    },
    grievance_nature: {
      type: String,
    },
    principal_name: {
      type: String,
    },
    grievance_title: {
      type: String,
    },
    grievance_description: {
      type: String,
    },
    grievant_university: {
      type: String,
    },
    imgs: {
      type: Array,
    },
    day_counter: {
      type: Number,
      default: 0,
    },
    satisfied_count: {
      type: Number,
      default: 0,
    },
    satisfied: {
      type: Boolean,
      default: false,
    },
    assigned_in_role: {
      type: String,
      enum: ["1A", "1B"],
    },
    region: {
      type: String,
      enum: ["east", "west", "north", "south"],
    },
    short_id: {
      type: String,
    }, createdAt: {type: Date, default: moment},
    
    updatedAt: {type: Date, default: moment}
  }
);

const Grievance = mongoose.model("Grievance", grievanceSchema);

module.exports = { Grievance };
