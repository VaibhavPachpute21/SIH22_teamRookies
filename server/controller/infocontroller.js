const {Grievance} = require('../models/grievance_model')
const {Officer} = require('../models/officer_model')
const {UniAdmin} = require('../models/uni_admin_model')


exports.GetDashboardData = async (req,res,next) => {

    try {
        const pendingGrievances = await Grievance.find({satisfied:false}).count()
    const newGrievancestoday = await Grievance.find({
        $where: function () {
          today = new Date();
          today.setHours(0, 0, 0, 0);
          return this._id.getTimestamp() >= today;
        },
      }).count();
      const totalOfficers = await Officer.find({}).count();
      const totalUniversity = await UniAdmin.find({}).count();
      
        res.status(200).json({
          pendingGrievances: pendingGrievances,
          newGrievacestoday: newGrievancestoday,
          totalOfficers: totalOfficers,
          totalUniversity: totalUniversity,
        });
    
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    

}