import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Rafaela!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Rafaela de oculos"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Olá! Sou a Rafaela e estou muito empolgada em compartilhar com vocês a minha jornada de transformação da barbearia para o mundo do desenvolvimento de software, enquanto equilibro minha vida como esposa e mãe de dois meninos.
            </p>
            <p className={styles.paragrafo}>
            Recentemente, descobri uma paixão pela tecnologia e decidi buscar uma mudança de carreira para o desenvolvimento de software. Nos últimos meses, tenho me dedicado intensamente a cursos, bootcamps e projetos práticos, explorando linguagens como Javascript, Typescript, CSS, HTML e frameworks como o React, e o Angular.
            </p>
            <p className={styles.paragrafo}>
            Esta jornada desafiadora tem sido gratificante e estimulante, permitindo-me desenvolver novas habilidades e aplicar minha criatividade de maneiras totalmente novas. Acredito firmemente que as habilidades da barbearia, como atenção aos detalhes e foco no cliente, são tão valiosas no desenvolvimento de software quanto são na cadeira de barbeira.
            </p>
            <p className={styles.paragrafo}>
            Equilibrar minha vida pessoal como esposa e mãe é crucial enquanto me aventuro neste novo campo. 
            </p>
            <p className={styles.paragrafo}>
            Sinto que este momento é como plantar as sementes de um futuro onde minha criatividade e habilidades em tecnologia se combinam para criar soluções verdadeiramente impactantes. Estou pronta para ver essas ideias florescerem e iluminarem o caminho à frente. 
            </p>
        </PostModelo>
    )
}