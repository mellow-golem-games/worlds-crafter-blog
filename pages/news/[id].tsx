import { getAllPostIds, getPostData } from '../../libs/posts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Post({postData}: any) {

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header></Header>
      <div className="Subpage" style={{marginTop: "64px"}}>
        <a className="reverse dark" href="/">{"<- Back To news"}</a> 
        <h1 style={{marginTop: "24px"}}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Footer />
    </div>
  );
}


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


export async function getStaticProps({ params }: any) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}