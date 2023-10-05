import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BotaoRedirecionar.module.css';
interface BotaoRedirecionarProps {
    texto: string;
    destino: string;
}

const BotaoRedirecionar: React.FC<BotaoRedirecionarProps> = ({ texto, destino }) => {
    const navigate = useNavigate();

    const handleRedirecionar = () => {
        navigate(destino);
    };

    return (
        <button className={styles.botao} onClick={handleRedirecionar}>
            {texto}
        </button>
    );
};

export default BotaoRedirecionar;
