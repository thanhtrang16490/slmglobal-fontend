import HeaderMain from "../component/header.main";
import PostCard from "../component/post.card";
import { Row, Col, Layout } from 'antd';
import ProductFooterModule from "../component/product.footer";
type Post = {
  id: number;

};


const getData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}blogs?populate=*`, {
    next: { revalidate: 86400 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();


}


const BlogPage = async () => {
  const posts = await getData();
  return (
    <>
      <HeaderMain
        hpctitle='Vietnam Economy News'
        hpcsubtitle=' '
        hpcbackground='/img/shipping-and-importing-header.jpg'
      />
      <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row gutter={3}>
          {posts.data.map((post: Post) => (
            <Col key={post.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </Layout>
      <ProductFooterModule />
    </>
  );
}

export default BlogPage;