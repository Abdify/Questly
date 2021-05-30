import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useState } from "react";
import logo from "../../../images/logo.png";
import { auth, provider } from "../Firebase/FirebaseConfig";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const googleSignIn = () => {
        auth.signInWithPopup(provider).catch((e) => {
            alert(e.message);
        });
    };

    const emailSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch((e) => alert(e.message));
    };

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    console.log(auth);
                }
            })
            .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <div className="login__logo">
                    <img src={logo} alt="" />
                </div>
                <div className="login__desc">
                    <p>Quest for knowledge!</p>
                    <p style={{ color: "royalblue" }}>Created with ❤️ by Team 10</p>
                </div>
                <div className="login__auth">
                    <div className="login__authOptions">
                        <div className="login__authOption">
                            <img
                                className="login__googleAuth"
                                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                                alt=""
                            />
                            <p onClick={googleSignIn}>Continue With Google</p>
                        </div>
                        <div className="login__authOption">
                            <img
                                className="login__googleAuth"
                                src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
                                alt=""
                            />
                            <span>Continue With Facebook</span>
                        </div>
                        <div className="login__authDesc">
                            <p>
                                <span className="text-highlighted">Sign Up With Email</span>. By
                                continuing you indicate that you have read and agree to Questly's
                                <span className="text-highlighted">Terms of Service </span>
                                and <span className="text-highlighted">Privacy Policy</span>.
                            </p>
                        </div>
                    </div>
                    <div className="login__emailPass">
                        <div className="login__label">
                            <h4>Login</h4>
                        </div>
                        <div className="login__inputFields">
                            <div className="login__inputField">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="login__inputField">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="login__forgButt">
                            <small>Forgot Password?</small>
                            <button className="btn-submit" onClick={emailSignIn}>Login</button>
                        </div>
                        <button className="btn-submit" onClick={register}>Register</button>
                    </div>
                </div>
                <div className="login__lang">
                    <p>Bangla</p>
                    <ArrowForwardIosIcon fontSize="small" />
                </div>
                <div className="login__footer">
                    <p>About</p>
                    <p>Languages</p>
                    <p>Careers</p>
                    <p>Businesses</p>
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Contact</p>
                    <p>&copy; Questly Inc. {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
