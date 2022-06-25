import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";
const initialize = () => {
    initializeApp(firebaseConfig);
}
export default initialize;