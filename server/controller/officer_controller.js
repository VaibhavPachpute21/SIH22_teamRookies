const { Officer } = require('../models/officer_model')
const {Grievance} = require('../models/grievance_model')
const {Forward} = require('../models/forward_model') 

exports.register = async (req, res, next) => {
    const { email, password,role,fullname,committee,avatar, banner,phone_number, college_name,university,district, state,university_nodal_no } = req.body;

    try {

        const findUserWithUniAndMax = await Officer.findOne({"university":university}).sort('-university_nodal_no') 
        if(findUserWithUniAndMax){
            let max = findUserWithUniAndMax.university_nodal_no

            const newUser = await Officer.create({
                email,password,role,fullname,committee,avatar,banner,phone_number,college_name,university,district,state
            })
            
            if(newUser){
            await Officer.findByIdAndUpdate(newUser._id,{$set:{university_nodal_no:max+1}})
            }
            else{
                console.log("error")
            }

            sendToken(newUser, 201, res);
        }
        else{
            const newUser = await Officer.create({
                email,password,role,fullname,committee,avatar,banner,phone_number,college_name,university,district,state
            })
            sendToken(newUser, 201, res);
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }


};


exports.login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            await res.status(400).json({
                success: true,
                message: "Please provide all credentials"
            })
        }
        const officer = await Officer.findOne({ email }).select("+password")
        if (!officer) {
            res.status(401).send({ success: false, message: "Invalid credentials" })
            return;
        }

        const matched = await officer.comparePassword(password)
        if (!matched) {
            res.status(200).json({ success: false, message: "Incorrect username or password" })
            return;
        }


        const token = await officer.getSignedToken()

        res.status(201).json({
            success: true,
            token
        })

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

exports.userinfo = async (req, res, next) => {
    const id = req.params.id
    try {
        const TheUser = await Officer.findById(id)
        if (!TheUser) {
            res.status(200).json({
                success: false,
                message: "could not find user"
            })
        }
        res.status(200).send({
            success: true,
            TheUser
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}


exports.update = async (req, res, next) => {
    const id = req.user._id
    const { email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state } = req.body

    try {
        const updatedUser = await Officer.findOneAndUpdate({ "_id": id }, {
            $set: {
                email, password, role, fullname, committee, avatar, banner, phone_number, college_name, university, district, state
            }
        }, { new: true })

        if (!updatedUser) {
            res.status(200).send("Something went wrong")
        }

        res.status(200).json({
            success: true,
            updatedUser
        })
    } catch (error) {
        res.status(400).send(error.message)
    }

}

exports.AllMyGrievances = async (req,res,next) => {
    const id = req.params.id
    const role = req.params.role
    
    try {
        if(role==1){
            const myGrievances = await Grievance.find({"reciever_id":id})
            const forwards = await Forward.find({"current_reciever":id})
            if(!myGrievances){
                res.status(200).json({
                    success:false,
                    message:"You have no grievances, yet"
                })
    
               
    
            }
             
            if(!forwards){
                res.status(200).json({
                    success:false,
                    message:"You have no forward history too, yet"
                })
            }
           
            res.status(200).json({
                success:true,
                myGrievances,
                forwards
            })
        }
        if(role==0){
            const myGrievances = await Grievance.find({"grievant_id":id})
            const forwards = await Forward.find({"current_reciever":id})
            if(!myGrievances){
                res.status(200).json({
                    success:false,
                    message:"You have no grievances, yet"
                })
    
               
    
            }
             
            if(!forwards){
                res.status(200).json({
                    success:false,
                    message:"You have no forward history too, yet"
                })
            }
           
            res.status(200).json({
                success:true,
                myGrievances,
                forwards
            })
        }
        
        
       

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}   



const sendToken = async (user, statusCode, res) => {
    const token = await user.getSignedToken()

    res.status(statusCode).json({
        success: true,
        token
    })
}