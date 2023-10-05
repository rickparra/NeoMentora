import React from 'react';
import styles from './Card.module.css'; // Importe o módulo de estilos corretamente

interface CardProps {
    title: string;
    image: string;
    linkTo: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, linkTo, onClick }) => {
    return (
        <div className={`${styles.card} ${styles.cardContainer}`} onClick={onClick}>
            <img className={styles.cardImage} src={image} alt={title} />
            <div className={styles.cardTitle}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Card;
