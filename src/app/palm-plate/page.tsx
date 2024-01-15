'use client';

import { Col, Layout, Pagination, Row } from "antd";
import ProductFooterModule from "../component/product.footer";
import HeaderProductCatogeries from '../component/header.product.catogeries';
import ProductCard from "../component/product.card";
import { useEffect, useState } from "react";


type Product = {
  id: number;
};

type Meta = {
  total: number;
  pagination: any;
};

type ProductsData = {
  data: Product[];
  meta: Meta;
};




const catogeries: any = [
  {
    title: 'PALM LEAF PLATES',

  },
  {
    title: 'PALM LEAF BOWLS',

  },
  {
    title: 'PALM LEAF TRAYS',
  },

]




const PalmPlatePage = () => {
  const [products, setProducts] = useState<ProductsData | null>(null);


  const [meta, setMeta] = useState({
    current: 1,
    pageSize: 12,
    total: 0,
    pages: 0,
  });

  useEffect(() => {

    getData();
  }, []);


  const getData = async () => {

    const res = await fetch(`/palm-plate/api?current=${meta.current}&pagesize=${meta.pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setProducts(data);
    setMeta({
      current: data.meta.pagination.page,
      pageSize: data.meta.pagination.pageSize,
      pages: data.meta.pagination.pageCount,
      total: data.meta.pagination.total,
    })
    console.log(data);
  }





  const handleOnChange = async (page: number, pageSize: number) => {
    console.log(page, pageSize);
    const res = await fetch(`/palm-plate/api?current=${page}&pagesize=${pageSize}`);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setProducts(data);

    setMeta({
      current: page,
      pageSize: pageSize,
      pages: meta.pages,
      total: meta.total,
    })


  }

  return (
    <>
      <HeaderProductCatogeries
        hpctitle='Anam Cau - Palm Plate'
        hpcsubtitle='Discover new and trending products'
        data={catogeries}
        hpcbackground='img/anam-header.jpg'
      />


      <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: '#17274f', fontSize: '28px' }}>Recommend products</h2>
        <Row gutter={3}>
          {products && products.data && products.data.map((product: Product) => (
            <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <ProductCard product={product} />
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

export default PalmPlatePage;