import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase-config";

export default function CreateUserHook(email, password, data) {
    const [snapshot] = useCollection(
        db.collection("users").doc(email).set({ email, password, data })
    )
    return snapshot
}