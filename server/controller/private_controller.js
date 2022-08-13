exports.Verify = async (req,res,next) => {
    res.status(200).json({
        user:req.user,
        type:req.type,
        success:true
    })
}