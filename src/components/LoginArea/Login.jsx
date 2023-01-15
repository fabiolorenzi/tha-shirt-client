import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./stylesheets/Login.css";

function Login() {
    const history = useHistory();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState({
        showP: false,
        word: "password"
    });

    const handleChange = e => {
        e.preventDefault();
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        axios.get("http://thashirtbackend.hopto.org/api/users/")
            .then(res => setUsers(res.data))
            .catch(err => alert("Not possible to login now. Please retry later."));
    }, []);

    let i = 0;

    const loginAction = e => {
        e.preventDefault();
        users.forEach(user => {
            if (user.email === loginData.email) {
                i = 0;
                if (user.password === loginData.password) {
                    localStorage.setItem("logged", true);
                    localStorage.setItem("username", user.username);
                    localStorage.setItem("pass", user.pass);
                    localStorage.setItem("id", user._id);
                    alert("Login successful!!!");
                    history.push("/");
                    window.location.reload();
                } else {
                    setLoginData({...loginData, password: ""});
                    alert("Password not correct! Please check the email you inserted.");
                };
            } else if (i < users.length - 1) {
                i++;
            } else {
                alert("User not found! Please check the email you inserted or create the account.");
                setLoginData({
                    email: "",
                    password: ""
                });
                i = 0;
            };
        });
    };

    const psswShow = e => {
        e.preventDefault();
        if (show.showP) {
            setShow({
                showP: false,
                word: "password"
            });
        } else {
            setShow({
                showP: true,
                word: "text"
            });
        };   
    };

    return(
        <div className="loginContainer" data-testid="loginContainer">
            <h1 data-testid="loginTitle">Login</h1>
            <form noValidate onSubmit={loginAction}>
                <div>
                    <label htmlFor="email" data-testid="loginLabelEmail">Email</label>
                    <input type="email" name="email" value={loginData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" data-testid="loginLabelPassword">Password</label>
                    <input type={show.word} name="password" value={loginData.password} onChange={handleChange} />
                    <button onClick={psswShow} className="passwordShower" id={show.showP ? "psswShAct1" : ""} data-testid="loginButtonShow">Show</button>
                </div>
                    <button type="submit" data-testid="loginButtonLogin">Login</button>
            </form>
        </div>
    );
};

export default Login;