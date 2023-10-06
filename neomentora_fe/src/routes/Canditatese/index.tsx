import { useState } from 'react';
import Card from '../../components/Card';
import styles from './canditatese.module.css';

import card2 from '../../assets/Images/banner2-1.png';
import card1 from '../../assets/Images/banner3_1.png';
import card3 from '../../assets/Images/banner4_1.png';

import MentorScreen from './Mentor/MentorScreen'; 
import InvestidorScreen from './Investidor/InvestidorScreen'; 
import NegocioScreen from './Negocio/NegocioScreen'; 

export default function Canditatese() {
    const [selectedCard, setSelectedCard] = useState<string | null>(null);

    const handleCardClick = (cardTitle: string) => {
        setSelectedCard(cardTitle);
    };

    return (
        <div className={styles.canditatese}>
            <div className={styles.cards}>
                {selectedCard === "PEQUENO NEGÓCIO" ? (
                    <NegocioScreen /> // Renderize a tela de Negócio se o card for selecionado
                ) : selectedCard === "MENTOR" ? (
                    <MentorScreen /> // Renderize a tela de Mentor se o card for selecionado
                ) : selectedCard === "INVESTIDOR" ? (
                    <InvestidorScreen /> // Renderize a tela de Investidor se o card for selecionado
                ) : (
                    // Renderize os cards iniciais se nenhum card estiver selecionado
                    <>
                        <Card title="PEQUENO NEGÓCIO" image={card1} linkTo="#" onClick={() => handleCardClick("PEQUENO NEGÓCIO")} />
                        <Card title="MENTOR" image={card2} linkTo="#" onClick={() => handleCardClick("MENTOR")} />
                        <Card title="INVESTIDOR" image={card3} linkTo="#" onClick={() => handleCardClick("INVESTIDOR")} />
                    </>
                )}
            </div>
        </div>
    );
}
