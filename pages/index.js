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
          {t.skills.skill.list.map((item, index) => (
            <div key={index} className={styles.skillBox}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        <section>
          <Title txt={t.workExperience.title} />
          {t.workExperience.list.map((item, index) => (
            <div key={index} className={styles.skillBox}>
              <p><b>{item.time} : {item.title}</b></p>
              {item.description.map((desc, descIndex) => (
                <p key={descIndex}>{desc}</p>
              ))}
            </div>
          ))}
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
