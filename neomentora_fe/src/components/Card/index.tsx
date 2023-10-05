import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    title: string;
    image: string;
    linkTo: string;
}

const Card: React.FC<CardProps> = ({ title, image, linkTo }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(linkTo);
    };

    return (
        <div className={styles.card} onClick={handleCardClick}>
            <img src={image} alt={title} className={styles.cardImage} />
            <div className={styles.cardTitle}>
                <h2>{title}</h2>
            </div>
        </div>
    );
};

export default Card;
