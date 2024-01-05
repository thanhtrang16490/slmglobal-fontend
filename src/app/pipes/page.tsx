
import { Row, Col } from 'antd';
import ProductCard from '../component/product.card';
type Product = {
  id: number;

};



const getData = async () => {
  const res = await fetch('https://api.slmglobal.vn/api/products?filters[category][$eq]=Plastic%20Pipes&populate=*', {
    // next: { revalidate: 3600 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();

}


const PipesPage = async () => {
  const products = await getData();
  // console.log(products);
  return (
    <Row gutter={16}>
      {products.data.map((product: Product) => (
        <Col key={product.id} xs={24} sm={24} md={12} lg={8} xl={6} xxl={4}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default PipesPage;