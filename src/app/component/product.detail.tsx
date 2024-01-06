'use client'


import { Card, Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Meta from 'antd/es/card/Meta';

type ProductDetailProps = {
    product: any;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {



    return (

        <div style={{ padding: '50px 20px 20px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '100%', height: '100%', position: 'relative' }}>
                <Row gutter={16}>


                    <Col xs={24} sm={24} md={12}>

                        <Card style={{ marginTop: '20px' }} title={<Typography.Title style={{ whiteSpace: 'pre-line' }} level={4}>{product.data.attributes.name}</Typography.Title>}>
                            <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                                <Image
                                    style={{ padding: '15px' }}
                                    layout="fill"
                                    objectFit="cover"
                                    src={
                                        product.data.attributes.feature_image.data
                                            ? `http://api.slmglobal.vn${product.data.attributes.feature_image.data.attributes.url}`
                                            : "/img/place-holder.png"
                                    }
                                    alt={product.attributes ? product.attributes.name : ""}
                                />
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <Card style={{ marginTop: '20px' }}
                        >
                            <Typography.Paragraph >Product Catogery:
                                {product.data.attributes.Category}
                            </Typography.Paragraph>
                            <Meta description={<Typography.Paragraph>{product.data.attributes.feature}</Typography.Paragraph>} />
                            <Typography.Title level={5}>
                                Please contact us via Customer Service Departments below for advice and quotes:
                            </Typography.Title>
                            <Typography.Paragraph >
                                International Sale Manager: Tracy Dang (Ms.)
                                <br />
                                Whatsapp: <a href="tel:+84989837143">+84 (989) 837-143</a>
                                <br />
                                Email: <a href="mailto:Tracy@slmglobal.vn">Tracy@slmglobal.vn</a>

                            </Typography.Paragraph>
                            <div><hr></hr></div>
                            <Typography.Paragraph>
                                Product Director: Daniel Nguyen (Mr.)
                                <br />
                                Whatsapp: <a href="tel:+84979983355">+84 (979) 983-355</a>
                                <br />
                                Email: <a href="mailto:Daniel@slmglobal.vn">Daniel@slmglobal.vn</a>
                            </Typography.Paragraph>
                            <div><hr></hr></div>
                            <Typography.Paragraph>
                                Tenical Manager: Victor Nguyen (Mr.)
                                <br />
                                Whatsapp: <a href="tel:+84979983355">+84 (969) 862-033</a>
                                <br />
                                Email: <a href="mailto:info@slmglobal.vn">Victor@slmglobal.vn</a>
                            </Typography.Paragraph>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={16} style={{ paddingTop: '50px' }}>
                    <Col xs={24} sm={24} md={18}>
                        <Card title='Description'>
                            <Typography.Paragraph style={{ margin: 0 }}>
                                <div

                                    dangerouslySetInnerHTML={{ __html: product.data.attributes.description }} />
                            </Typography.Paragraph>
                            <Typography.Title level={5} >
                                Packing & Delivery
                                <hr></hr>
                            </Typography.Title>
                            <Typography.Paragraph style={{ margin: 0 }}>
                                Time Shipping: 10-25 days<br />
                                Shiping Port: Hai Phong Port<br />
                                Packing Detail: 2000 pcs/carton or customized packaging<br />
                            </Typography.Paragraph>
                            <div style={{ width: '100%', height: '100%', paddingTop: '100%', position: 'relative' }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src={`/img/packing.png`}
                                    alt={product.data.attributes.name}
                                />
                            </div>
                            <div style={{ width: '100%', height: '100%', paddingTop: '66.5%', position: 'relative' }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    src={`/img/contact.jpg`}
                                    alt={product.data.attributes.name}
                                />
                            </div>

                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );

}

export default ProductDetail;