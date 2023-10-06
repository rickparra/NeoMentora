import { ChangeEvent, useState } from 'react';
import styles from './negocio.module.css';
import defaultImage from '../../../assets/Images/user1.png'; // Importe sua imagem padrão aqui
import { SmallBusinessProps, registerMentor, registerSmallBusiness } from '../register';

export default function NegocioScreen() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [smallBusiness, setsmallBusiness] = useState<SmallBusinessProps>()


    // Função para lidar com a seleção de uma imagem
    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Obtém o arquivo selecionado

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Função para abrir o input de arquivo ao clicar no botão
    const handleSelectImageClick = () => {
        const inputElement = document.getElementById('imageUploadInput');
        if (inputElement) {
            inputElement.click();
        }
    };

    const onclickSmallBusiness = () => {
        registerSmallBusiness({
            name: "fulano de tal",
            email: "fulano@gmail.com8",
            ddd: 11,
            phone: 123212321,
            type_of_document: "CPF",
            document: "12345678901",
            activity_sector: "setor de atividade",
            problem_or_challenge: "meu problema é ter problema",
            photo_url: "https://sm.ign.com/ign_br/screenshot/default/imagem-2023-09-04-171030002_zt57.jpg"
        })
            .then(res => setsmallBusiness(res.data))
            .catch(error => console.error(error))
    }

    

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Impede o comportamento padrão do formulário
        // Realize o processamento do formulário aqui
      };

    return (
        <div className={styles.negocio}>
            <div className={styles.top}>
                <div className={styles.inline}>
                    <h1>Olá,</h1>
                    <h1 className={styles.specialTitle}>Pequeno Negócio</h1>
                </div>
                <p>Cadastre-se com suas informações, por favor.</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.mid}>
                    <div className={styles.inputContainer}>
                        <div className={styles.inputSection}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="empresa">Nome da empresa</label>
                                <input type="text" id="empresa" placeholder="Digite o nome da empresa" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="cnpj">CPF ou CNPJ</label>
                                <input type="text" id="cnpj" placeholder="Digite o CPF ou CNPJ" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Digite o seu email" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" id="telefone" placeholder="Digite o telefone" />
                            </div>
                        </div>

                        <div className={styles.inputSection}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="setor">Setor de atuação</label>
                                <input type="text" id="setor" placeholder="Digite o setor de atuação" />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="problema">Problema ou desafio enfrentado</label>
                                <textarea id="problema" placeholder="Descreva o problema ou desafio"></textarea>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="senha">Criar senha</label>
                                <input type="password" id="senha" placeholder="Crie sua senha" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.midFoto}>

                        {/* Input de arquivo oculto */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="imageUploadInput"
                            style={{ display: 'none' }}
                        />

                        {/* Div para exibir a imagem selecionada ou a imagem padrão */}
                        <div className={styles.selectedImage}>
                            {selectedImage ? (
                                <img
                                    src={selectedImage}
                                    alt="Imagem de perfil"
                                    className={styles.coverImage}
                                />
                            ) : (
                                <img
                                    src={defaultImage}
                                    alt="Imagem padrão"
                                    className={styles.coverImage}
                                />
                            )}
                        </div>

                        {/* Botão para selecionar a imagem */}
                        <button className={styles.selectImageButton} onClick={handleSelectImageClick}>
                            Selecionar Imagem
                        </button>
                    </div>
                </div>

                <div className={styles.botton}>
                    <label htmlFor="termos" className={styles.termos}>Termos e Condições</label>
                    <input type="checkbox" name="termosCondicoes" id="termosCondicoes" className={styles.checked} />
                </div>

                <button className={styles.selectImageButton} onClick={()=>onclickSmallBusiness()}>Registrar Conta</button>
            </form>

        </div>
    );
}
