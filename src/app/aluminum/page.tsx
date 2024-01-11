
import { Row, Col, Layout } from 'antd';
import ProductCard from '../component/product.card';
import { Content } from 'antd/es/layout/layout';
type Product = {
  id: number;

};



const getData = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products?filters[category][$eq]=Alumilumn%20Frame&populate=*`, {
    next: { revalidate: 86400 }
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();

}


const AluminumPage = async () => {
  const products = await getData();
  // console.log(products);
  return (
    <>
      <Content style={{ width: '100%', position: 'relative', height: '350px', marginTop: '50px' }}>
        <Content style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '240px', textAlign: "center", backgroundImage: `url('img/renewable-energy.jpg')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', left: '50%', position: 'absolute', translate: '-50% -50px' }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '100%', position: 'absolute' }}>
          </div>
          <div style={{ color: 'white', zIndex: '99', position: 'absolute', left: '50%', translate: '-50% 10px' }}>
            <h1 style={{ fontSize: '36px' }}>Aluminum Frame</h1>
            <h3>Discover new and trending products</h3>
          </div>
        </Content>
        {/* <Content style={{ margin: '0 auto -77px', height: '185px', width: '1200%', maxWidth: '1200px', background: 'white', borderRadius: '8px', position: 'absolute', top: '150px', left: '50%', translate: '-50% -50px', boxShadow: '0 0 12px 0 rgba(0,0,0,.2)' }}>
          <h1>Categories</h1>
        </Content> */}
      </Content>
      <Layout style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontSize: '28px' }}>Recommend products</h2>
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

export default AluminumPage;