import Head from 'next/head';
import styles from '../../styles/Projects.module.css';
import Project from "../../components/Project";

export const getStaticProps = ({ locale }) => {
    const t = { ...require(`../../lang/projects/${locale}.json`) };
    return {
        props: { t }
    }
}

const Projects = ({t}) => {
    const projectsList = ()=>{
        const arr = []
        for(let i in t.list){
            arr.push(t.list[i])
        }
        return arr;
    }
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <link rel="shortcut icon" href="/img/shang.ico" />
                <link rel="bookmark" href="/img/shang.ico" />
                <title>Shang | Projects</title>
            </Head>
            <section className={styles.worksBox}>
                {
                projectsList().map(element => {
                    return <Project con={element} key={element.id} />
                })
                }
            </section>
        </>
    );
}

export default Projects;