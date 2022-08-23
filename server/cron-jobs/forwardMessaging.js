const {SendMessage} = require('../messaging/sendMessage') 
exports.SendMessageToForward = async (req,res,next) => {
    try {
        const latestForward = await Forward.find().limit(1).sort({$natural:-1})
        if(!latestForward){
            res.status(200).json({
                success:false,
                message:"Could not find information"
            })
        }
        console.log(latestForward)
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}