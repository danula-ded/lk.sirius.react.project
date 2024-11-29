import React from "react";
import "./AuthPage.css";
import { Button } from "@consta/uikit/Button";

const AuthPage = () => {

    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    })
    const fieldChangeHandle = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const formSubmitHandle = (evt) => {
        alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
    }

    return (
        <>
            <h1 className="auth-page-title">AuthPage</h1>
            <div className="feedback-form-container">
                <form className="feedback-form">
                    <label htmlFor="firstName">Имя:</label>
                    <input id="firstName" name="username" value={formData.username} onChange={fieldChangeHandle} />
                    <label htmlFor="password">Пароль:</label>
                    <input id="password" name="password" value={formData.password} onChange={fieldChangeHandle} />
                    <Button size='m' label="Вход" form="round" onClick={formSubmitHandle} />
                </form>
            </div>
        </>
    );
};

export default AuthPage;