import React from "react";
import { createTimestamp } from '../../firebase-config';

import { db } from "../../firebase-config";
import { UserAuth } from "../../context/AuthContext";


 export default function CreateUserHook(data){

    const {user} = UserAuth()
    
    React.useEffect(()=>{
       if(user){

       
        const ref = db.collection("users").doc(user.uid)
        ref.get().then((doc)=>{
            if(!doc.exists){
                ref.set({
                    userId: user?.uid,
                    dob:data?.DOB,
                    email:data?.email,
                    fullName:data?.fName + " " +data?.lName,
                    role:data?.role,
                    phone:data?.phone,
                    course:data?.course,
                    password:data?.pass,
                    college:data?.college,
                    academic_year:data?.academicYear,
                    address:data?.address,
                    avatar:"url.jpg",
                    banner:"banner.jpg",
                    district:"Palghar",
                    state:"Maharashtra",
                    university:"MU",
                    timestamp:createTimestamp()
                })
            }
        })
       }
    },[user])


    
}

