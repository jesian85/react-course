import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/restaurants", { replace: true });
    }, [navigate]);
    return <div>Главная</div>;
};