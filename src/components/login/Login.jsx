import React, { useState } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { useAuth } from "../authWrapper/AuthContext";
import { Link, useNavigate } from "react-router";

export function Login() {
    const navigate = useNavigate();
    const {login} = useAuth();
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(userData)
        login(userData.username)
        navigate("/posts");
    }
    return (
        <>
            <Header />
            <div class="formcontainer">
                <form onSubmit={onSubmit} class ="form">
                    <input 
                        placeholder="Username"
                        className="formcontent"
                        value={userData.username}
                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                    />
                    <input 
                        placeholder="Password"
                        className="formcontent"
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                        <button type="submit" className="formcontent" id="subbtn">
                            Submit
                        </button>
                </form>
                
            </div>
            <Footer />
        </>
    )
}