import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../Redux/userSlice";
import { auth } from "./Firebase/FirebaseConfig";

const CheckUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(
                    login({
                        uid: authUser.uid,
                        email: authUser.email,
                        displayName: authUser.displayName,
                        photo: authUser.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
            console.log(authUser);
        });
    }, [dispatch]);
}

export default CheckUser;