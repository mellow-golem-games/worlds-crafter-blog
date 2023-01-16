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
          {allPostsData.map(({ title }: any) => {
            return (
              <a href="/news/release-1.0.0" className="reverse dark">
                <div className="News__post"><h4>Release 1.0.0</h4>
                  <p style={{marginBottom: "8px"}}>September 20, 2022</p>
                  <p>Custom Entities</p>
                </div>
              </a>)
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}
