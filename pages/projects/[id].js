import styles from "../../styles/Projects.module.css";
import Head from 'next/head';
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";


export async function getStaticPaths() {
   
    return {
        paths: [],
        fallback: "blocking",
    };
}

export function getStaticProps({ locale }) {
  
    return {
        props: {
            locale,
            t: {
                ...require(`../../lang/projects/${locale}.json`),
            },
        },
    };
}

const ProjectsItem = ({ t }) => {
    const router = useRouter();
    const { query } = router;
    const id = query.id;
    const hasProjectData = t.list[id];
    console.log(hasProjectData)
    const gtmObj = {
        key:"006013",
        project:hasProjectData.title
    }
    useEffect(()=>{
        window.dataLayer?.push({
            event: "clickPage",
            ...gtmObj
          });
    })
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <link rel="shortcut icon" href="/img/shang.ico" />
                <link rel="bookmark" href="/img/shang.ico" />
                <title>Shang | Projects</title>
            </Head>
            <div style={!hasProjectData ? { display: "none" } : { display: "block" }}>
                <h2>{hasProjectData.title}</h2>
                <Image className={styles.projectItemImg} src={`/img/projects/${hasProjectData.image}`} width={588} height={346} alt="project cover img" priority={true}/>
                <h3>{hasProjectData.allDescribe.title}</h3>
                <p>{hasProjectData.allDescribe.text}</p>
                {
                    hasProjectData.url != "" && (<><h3>URL : </h3>
                        <p><a className={styles.linkUrl} target="_blank" href={hasProjectData.url}>{hasProjectData.url}</a></p></>)
                }

                <h3>{hasProjectData.skill.design.title} : </h3>
                <p> {hasProjectData.skill.design.list.join(" / ")}</p>
                <h3>{hasProjectData.skill.development.title} : </h3>
                <p>{hasProjectData.skill.development.list.join(" / ")}</p>
                {
                    hasProjectData.imgArr.list.length != 0 && (<>
                        <h3>{hasProjectData.imgArr.title} : </h3>
                        <div>
                            {
                                hasProjectData.imgArr.list.map((element, index) => {
                                    return (<div key={index}>
                                        <Image className={styles.projectEachItem} src={`/img/projects/${element.src}`} width={588} height={342} alt="project cover img" priority={true} />
                                        <p>{element.text}</p>
                                    </div>)
                                })
                            }
                        </div>
                    </>)
                }

            </div >
            <div style={!hasProjectData ? { display: "block" } : { display: "none" }}>
                <h1>Oops!</h1>
                <p>no results</p>
            </div>
        </>

    );
}
export default ProjectsItem;