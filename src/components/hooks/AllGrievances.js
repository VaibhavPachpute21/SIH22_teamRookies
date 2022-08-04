import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase-config";
import { UserAuth } from "../../context/AuthContext";

export default function useGrievances(){


    const [snapshot] = useCollection(
        db.collection('grievances')
    )

    const grievances = snapshot?.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
    }))

    return grievances
}