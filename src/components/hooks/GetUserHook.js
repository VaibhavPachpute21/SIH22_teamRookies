import { useCollection } from 'react-firebase-hooks/firestore'
import { query } from "firebase/firestore";
import { db } from "../../firebase-config";

function GetUserHook(uid) {
    const [snapshot] = useCollection(
        query(
            db.collection("users").where("userId", "==",uid)
        )
    )
    
    return snapshot
}

export default GetUserHook

