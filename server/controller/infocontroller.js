const {Grievance} = require('../models/grievance_model')
const {Officer} = require('../models/officer_model')
const {} = require('../models/uni_admin_model')
exports.GetDashboardData = async () => {
    const pendingGrievances = await Grievance.find({satisfied:true})

}