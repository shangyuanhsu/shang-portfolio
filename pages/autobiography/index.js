import styles from '../../styles/Autobiography.module.css';
import Head from 'next/head';

export function getStaticProps({ locale }) {
    return {
        props: {
            locale,
            t: {
                ...require(`../../lang/autobiography/${locale}.json`),
            },
        },
    };
}

const Autobiography = ({ locale, t }) => {
    return (
        <>
            <Head>
                <meta name="description" content="shangyuan's homepage" />
                <meta name="author" content="shangyuan" />
                <link rel="shortcut icon" href="/img/shang.ico" />
                <link rel="bookmark" href="/img/shang.ico" />
                <title>Shang | Bio</title>
            </Head>
            <div>
                <section className={styles.about}>
                    <h3>{t.about.list[0].title}</h3>
                    <p>
                        {t.about.list[0].text}
                    </p>
                    <h3>{t.about.list[1].title}</h3>
                    <p>
                        {t.about.list[1].text}
                    </p>
                    <h3>{t.about.list[2].title}</h3>
                    <p>
                        {t.about.list[2].text}
                    </p>
                    <h3>{t.about.list[3].title}</h3>
                    <p>
                        {t.about.list[3].text}
                    </p>
                </section>
            </div>
        </>

    );
}

export default Autobiography;