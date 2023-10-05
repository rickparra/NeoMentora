import BotaoRedirecionar from '../../components/BotaoRedirecionar';
import styles from './home.module.css'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.left}>

                <div className={styles.text}>
                    <div className={styles.titulo}>
                        <h1>NEO</h1>
                        <h1>MENTORA</h1>
                    </div>
                    <div className={styles.subTitulo}>
                        <h3>
                            EMBU-GUAÇU
                        </h3>
                    </div>
                    <div className={styles.legenda}>
                        <p>
                            Nosso objetivo é unir pequenos empreendedores, mentores experientes, investidores e jovens da ONG Passos Mágicos, capacitando empreendedores iniciantes, ajudando-os a superar desafios, a expandir seus negócios e a contribuir para o desenvolvimento econômico local.
                        </p>
                    </div>
                </div>

                <div className={styles.botao}>
                    <BotaoRedirecionar texto="QUERO PARTICIPAR!" destino="/canditate-se" />
                </div>
            </div>

            <div className={`${styles.right} ${styles.centerVertically}`}>
                <FaFacebook className={styles.icon} />
                <FaInstagram className={styles.icon} />
                <FaYoutube className={styles.icon} />
                <FaTwitter className={styles.icon} />
            </div>


        </div>
    )
}