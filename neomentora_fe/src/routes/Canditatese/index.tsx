import Card from '../../components/Card'
import styles from './canditatese.module.css'

import card2 from '../../assets/Images/banner2-1.png'
import card1 from '../../assets/Images/banner3_1.png'
import card3 from '../../assets/Images/banner4_1.png'


export default function Canditatese() {
    return (
        <div className={styles.canditatese}>
            <div className={styles.cards}>
                <Card title="PEQUENO NEGÓCIO" image={card1} linkTo="#" />
                <Card title="MENTOR" image={card2} linkTo="#" />
                <Card title="INVESTIDOR" image={card3} linkTo="#" />
            </div>
        </div>
    )
}