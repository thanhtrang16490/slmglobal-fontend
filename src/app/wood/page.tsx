
import { Row, Col, Layout } from 'antd';
import ProductCard from '../component/product.card';
import { Content } from 'antd/es/layout/layout';
import HeaderProductCatogeries from '../component/header.product.catogeries';
type Product = {
  id: number;

};



const getData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}products?filters[category][$eq]=Plywood&populate=*`, {
    next: { revalidate: 86400 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();

}


const WoodPage = async () => {
  const products = await getData();
  // console.log(products);
  return (
    <>


      <HeaderProductCatogeries
        hpctitle='Plywood & Furniture'
        hpcsubtitle='Discover new and trending products'
        hpccatogeries='Phenolic plywood / BIRCH plywood / Melamine plywood / Laminate plywood / veneer plywood / PVC plywood / Furniture'
        hpcbackground='img/plywood-furniture.jpg'
      />

      <Layout style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: '#17274f', fontSize: '28px' }}>Recommend products</h2>
        <Row gutter={3}>
          {products.data.map((product: Product) => (
            <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Layout>
    </>
  );
}

export default WoodPage;