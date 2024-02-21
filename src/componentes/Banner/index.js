import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>
                <p className={styles.paragrafo}>
                Bem vindo ao meu espaço pessoal! Eu sou a Rafaela Barbosa, programadora 
                Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
                <div className={styles.imagens}>
                    <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    arria-hidden={true}
                     />

                     <img 
                        className={styles.minhaFoto}
                        src={minhaFoto}
                        alt="Foto da Rafaela de rosto"                        
                     />                
                     </div>
        </div>
    )
}