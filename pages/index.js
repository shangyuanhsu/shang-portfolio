import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';
// import MySpline from "../components/MySpline";
import Title from "../components/Title";

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
      t: {
        ...require(`../lang/index/${locale}.json`),
      },
    },
  };
}

export default function Home({ locale, t }) {
  return (
    <>
      <Head>
        <meta name="description" content="shangyuan's homepage" />
        <meta name="author" content="shangyuan" />
        <link rel="shortcut icon" href="/img/shang.ico" />
        <link rel="bookmark" href="/img/shang.ico" />
        <title>Shang | Homepage</title>
      </Head>
      {/* <MySpline /> */}
      <section>
        <section className={styles.myInfo}>
          <div>
            <h2>{t.shang.name}</h2>
            <p className='onpline'>{t.shang.born}</p>
            <p className='onpline'>{t.shang.email}</p>
          </div>
          <div className={styles.myPhoto}>
            <Image src="/img/shangPhoto.jpeg" width={120} height={120} alt="shang's photo" priority={true} />
          </div>
        </section>

        <section>
          <p><b>{t.introduce.learningByDoing.title}</b>{t.introduce.learningByDoing.text}</p>
          <p><b>{t.introduce.workingOn.title}</b>{t.introduce.workingOn.text}</p>
          <p><b>{t.introduce.teamwork.title}</b>{t.introduce.teamwork.text}</p>
        </section>

        {/* <section>
          <Title txt={t.skills.title} />
          <p>{t.skills.list}</p>
        </section> */}

        <section>
          <Title txt={t.skills.skill.title} />
          <div className={styles.skillBox}>
            <h4>{t.skills.skill.list[0].title}</h4>
            <p>
              {t.skills.skill.list[0].text}
            </p>
          </div>
          <div className={styles.skillBox}>
            <h4>{t.skills.skill.list[1].title}</h4>
            <p>
              {t.skills.skill.list[1].text}
            </p>
          </div>
          <div className={styles.skillBox}>
            <h4>{t.skills.skill.list[2].title}</h4>
            <p>
              {t.skills.skill.list[2].text}
            </p>
          </div>
          <div className={styles.skillBox}>
            <h4>{t.skills.skill.list[3].title}</h4>
            <p>
              {t.skills.skill.list[3].text}
            </p>
          </div>
        </section>

        <section>
          <Title txt={t.workExperience.title} />
          <p className={styles.skillBox}><b>{t.workExperience.list[0].time} : </b>{t.workExperience.list[0].title}</p>
          <p>[ {t.workExperience.list[0].description} ]</p>
          <p className={styles.skillBox}><b>{t.workExperience.list[1].time} : </b>{t.workExperience.list[1].title}</p>
          <p>[ {t.workExperience.list[1].description} ]</p>
          <p className={styles.skillBox}><b>{t.workExperience.list[2].time} : </b>{t.workExperience.list[2].title}</p>
          <p>[ {t.workExperience.list[2].description} ]</p>
          <p className={styles.skillBox}><b>{t.workExperience.list[3].time} : </b>{t.workExperience.list[3].title}</p>
          <p>[ {t.workExperience.list[3].description} ]</p>
        </section>

        <section>
          <Title txt={t.education.title} />
          <p>{t.education.list[0]}</p>
          <p>{t.education.list[1]}</p>
        </section>
      </section>

    </>
  );
}
