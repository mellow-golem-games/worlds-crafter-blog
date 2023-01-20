import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../libs/posts';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Worlds Crafter - News</title>
        <meta name="description" content="Worlds Crafter News and Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="Subpage">
        <h1 style={{marginTop: "64px"}}>News And Updates</h1>

        <div>
          {allPostsData.map(({ title, meta_desc, date, id }: any) => {

            return (
              <a href={`/news/${id}`} className="reverse dark">
                <div className="News__post"><h4>{title}</h4>
                  <p style={{marginBottom: "8px"}}>{date}</p>
                  <p>{meta_desc}</p>
                </div>
              </a>)
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
