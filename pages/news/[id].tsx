import { getAllPostIds, getPostData } from '../../libs/posts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Post({postData}: any) {
  console.log(postData)
  return (
    <div className="NewsPostPage">
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.meta_desc} />
      </Head>
      <Header></Header>
      <div className="Subpage" style={{ minHeight: "90vh"}}>
        <div style={{paddingTop: "24px"}} >
          <a className="reverse dark" href="/">{"<- Back To news"}</a> 
        </div>
        <article>
          <h1 style={{marginTop: "24px"}}>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
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