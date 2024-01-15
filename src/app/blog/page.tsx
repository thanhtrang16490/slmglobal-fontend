'use client';
import { useEffect, useState } from 'react';
import HeaderMain from "../component/header.main";
import PostCard from "../component/post.card";
import { Row, Col, Layout, Pagination } from 'antd';
import ProductFooterModule from "../component/product.footer";

type Post = {
  id: number;
};

type Meta = {
  total: number;
  pagination: any;
};

type PostsData = {
  data: Post[];
  meta: Meta;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<PostsData | null>(null);


  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 20,
    total: 0,
    pages: 0,
  });

  useEffect(() => {

    getData();
  }, []);


  const getData = async () => {

    const res = await fetch(`/blog/api?current=${meta.current}&pagesize=${meta.pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setPosts(data);
    setMeta({
      current: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pages: data.meta.pagination.pageCount,
      total: data.meta.pagination.total,
    })

  }






  if (!posts) {
    return <div>Loading...</div>;
  }

  const handleOnChange = async (page: number, pageSize: number) => {

    const res = await fetch(`/blog/api?current=${page}&pagesize=${pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setPosts(data);

    setMeta({
      current: page,
      pageSize: pageSize,
      pages: meta.pages,
      total: meta.total,
    })


  }

  return (
    <>
      <HeaderMain
        hpctitle='Vietnam Economy News'
        hpcsubtitle=' '
        hpcbackground='/img/shipping-and-importing-header.jpg'
      />
      <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row gutter={3}>
          {posts && posts.data && posts.data.map((post: Post) => (
            <Col key={post.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
        <Pagination
          current={meta.current}
          pageSize={meta.pageSize}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          total={meta.total}
          onChange={handleOnChange}
          showSizeChanger={true}
          style={{ margin: '20px 0' }}
        />
      </Layout>
      <ProductFooterModule />
    </>
  );
}

export default BlogPage;