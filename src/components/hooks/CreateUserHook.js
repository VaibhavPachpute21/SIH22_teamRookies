import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase-config";

export default function CreateUserHook(uid, data) {
    
    console.log(uid)
    console.log(data)

    const [snapshot] = useCollection(
        db.collection("users").add({
            userId: uid,
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
            university:"MU"
        })
    ) 
    

    return snapshot
}