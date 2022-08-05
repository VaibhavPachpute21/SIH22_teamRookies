import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase-config";

export default function CreateUserHook(uid, data) {
    
    const [snapshot] = useCollection(
        db.collection("users").doc(uid).set({userId: uid,data})
    )
    

    return snapshot
}