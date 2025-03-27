import React from "react";
import AuthForm from "../molecules/AuthForm";
import MainLayout from "../templates/MainLayout";

const Login: React.FC = () => {
    return (
        <MainLayout>
            <AuthForm />
        </MainLayout>
    );
};

export default Login;
