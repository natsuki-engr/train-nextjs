"use client"
import React, { ChangeEvent, useState } from "react";
import './contact.css'

const Contact = () => {
    const [username, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [isLogin, setIsLogin] = useState<boolean>(false)

    const handleUserName = (e: ChangeEvent) => {
        if (e.target instanceof HTMLInputElement)
            setUserName(e.target.value)
    }

    const handlePassword = (e: ChangeEvent) => {
        if (e.target instanceof HTMLInputElement)
            setPassword(e.target.value)
    }

    const handleLogin = () => {
        if (username === '' || password === '') return;
        setIsLogin(true)
    }

    const handleLogout = () => {
        setUserName('')
        setPassword('')
        setIsLogin(false)
    }

    return (
        <div className="wrapper">
            <div className="content">
                {isLogin ? (
                    <button className="button" onClick={handleLogout}>
                        logout
                    </button>
                ) : (
                    <>
                        <div className="input">
                            ユーザー名:
                            <input type="text" name="username" id="username" className="username" onChange={handleUserName} />
                        </div>
                        <div className="input">
                            パスワード:
                            <input type="text" name="password" id="password" className="password" onChange={handlePassword} />
                        </div>
                        <button className="button" onClick={handleLogin}>
                            login
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Contact
