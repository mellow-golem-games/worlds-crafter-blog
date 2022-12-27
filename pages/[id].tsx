import { getAllPostIds, getPostData } from '../libs/posts';
import Head from 'next/head';

export default function Post({postData}: any) {

  console.log(postData)
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>Hello</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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