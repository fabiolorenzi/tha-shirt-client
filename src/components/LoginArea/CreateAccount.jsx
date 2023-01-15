import React, { useState } from "react";
import axios from "axios";
import "./stylesheets/CreateAccount.css";

function CreateAccount() {
    const [user, setUser] = useState({
        name: "",
        surname: "",
        username: "",
        birthday: "",
        gender: "",
        nation: "",
        city: "",
        street: "",
        number: "",
        postal_code: "",
        tel: "",
        email: "",
        password: ""
    });
    const [show, setShow] = useState({
        showP: false,
        word: "password"
    });

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const createUser = e => {
        e.preventDefault();
        const newUser = {
            username: user.username,
            name: user.name,
            surname: user.surname,
            birthday: user.birthday,
            gender: user.gender,
            nation: user.nation,
            city: user.city,
            street: user.street,
            number: user.number,
            postal_code: user.postal_code,
            tel: user.tel,
            email: user.email,
            password: user.password,
            pass: false
        };

        axios.post("https://thashirtbackend.hopto.org/api/users/", newUser)
            .then(res => {
                alert(`New user created successfully! Now you can login with the credentials you gave.`);
                setUser({
                    name: "",
                    surname: "",
                    username: "",
                    birthday: "",
                    gender: "",
                    nation: "",
                    city: "",
                    street: "",
                    number: "",
                    postal_code: "",
                    tel: "",
                    email: "",
                    password: ""
                });
                window.location.reload();
            })
            .catch(err => alert(`${err}. Try again.`));
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
        <div className="createAccountContainer" data-testid="createAccountContainer">
            <h1 data-testid="createAccountTitle">Create account</h1>
            <form onSubmit={createUser}>
                <div>
                    <label htmlFor="name" data-testid="createAccountLabelName">Name</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="surname" data-testid="createAccountLabelSurname">Surname</label>
                    <input type="text" name="surname" value={user.surname} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="username" data-testid="createAccountLabelUsername">Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="birthday" data-testid="createAccountLabelBirthday">Birthday</label>
                    <input type="date" name="birthday" value={user.birthday} onChange={handleChange} />
                </div>
                <div className="radiusSelector" data-testid="createAccountRadiusSelector">
                    <h3 id="genderLabel" data-testid="createAccountLabelGender">Gender</h3>
                    <div className="genderSelector" onChange={handleChange}>
                        <div>
                            <input type="radio" name="gender" value="male" className="radInp" />
                            <p className="radLab">Male</p>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="female" className="radInp" />
                            <p className="radLab">Female</p>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="not-binary" className="radInp" />
                            <p className="radLab">Not Binary</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="nation" data-testid="createAccountLabelNation">Nation</label>
                    <input type="text" name="nation" value={user.nation} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city" data-testid="createAccountLabelCity">City</label>
                    <input type="text" name="city" value={user.city} onChange={handleChange} />
                </div>             
                <div>
                    <label htmlFor="street" data-testid="createAccountLabelStreet">Street</label>
                    <input type="text" name="street" value={user.street} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="number" data-testid="createAccountLabelNumber">Number</label>
                    <input type="text" name="number" value={user.number} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="postal_code" data-testid="createAccountLabelPostal_code">Postal Code</label>
                    <input type="text" name="postal_code" value={user.postal_code} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="tel" data-testid="createAccountLabelTel">Tel</label>
                    <input type="tel" name="tel" value={user.tel} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email" data-testid="createAccountLabelEmail">Email</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password" data-testid="createAccountLabelPassword">Password</label>
                    <input type={show.word} name="password" value={user.password} onChange={handleChange} />
                    <button onClick={psswShow} className="passwordShower" id={show.showP ? "psswShAct2" : ""} data-testid="createAccountButtonShow">Show</button>
                </div>
                <button type="submit" data-testid="createAccountButtonSubmit">Send</button>        
            </form>
        </div>
    );
};

export default CreateAccount;