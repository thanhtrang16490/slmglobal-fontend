
import { Row, Col, Layout } from 'antd';
import ProductCard from '../component/product.card';
type Product = {
  id: number;

};



const getData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}products?filters[category][$eq]=Mounting%20Screw&populate=*`, {
    next: { revalidate: 86400 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();

}


const ScrewPage = async () => {
  const products = await getData();
  // console.log(products);
  return (
    <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Row gutter={3}>
        {products.data.map((product: Product) => (
          <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default ScrewPage;