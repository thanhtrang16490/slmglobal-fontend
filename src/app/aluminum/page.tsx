
import { Row, Col } from 'antd';
import ProductCard from '../component/product.card';
type Product = {
  id: number;

};



const getData = async () => {
  const res = await fetch('https://api.slmglobal.vn/api/products?filters[category][$eq]=Alumilumn%20Frame&populate=*', {
    // next: { revalidate: 3600 }
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
    <Row gutter={16}>
      {products.data.map((product: Product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ScrewPage;