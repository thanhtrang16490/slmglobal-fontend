import PostCard from "../component/post.card";
import { Row, Col } from 'antd';
type Post = {
  id: number;

};


const getData = async () => {
  const res = await fetch('https://api.slmglobal.vn/api/blogs?populate=*', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();


}


const BlogPage = async () => {
  const posts = await getData();
  return (
    <Row gutter={16}>
      {posts.data.map((post: Post) => (
        <Col key={post.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
          <PostCard post={post} />
        </Col>
      ))}
    </Row>
  );
}

export default BlogPage;