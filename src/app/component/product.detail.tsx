'use client'

import { Button, Card, Carousel, Col, Divider, Layout, Row, Typography } from 'antd';
import Image from 'next/image';
import Meta from 'antd/es/card/Meta';
import ProductFooterModule from './product.footer';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import FormContact from './form.contact';

type ProductDetailProps = {
    product: any;
};

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <>
            <div style={{ padding: '20px 20px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '1440px', width: '100%', height: '100%', position: 'relative' }}>
                    <Row gutter={20}>
                        <Col xs={24} sm={24} md={10}>
                            <Card  >
                                <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                                    <Image
                                        style={{ padding: '15px' }}
                                        layout="fill"
                                        objectFit="cover"
                                        src={
                                            product.data.attributes.feature_image.data && product.data.attributes.feature_image.data.attributes.formats
                                                ? product.data.attributes.feature_image.data.attributes.formats.medium
                                                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.data.attributes.feature_image.data.attributes.formats.medium.url}`
                                                    : product.data.attributes.feature_image.data.attributes.formats.large
                                                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.data.attributes.feature_image.data.attributes.formats.large.url}`
                                                        : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.data.attributes.feature_image.data.attributes.url}`
                                                : "/img/place-holder.png"
                                        }
                                        alt={product.attributes ? product.attributes.name : ""}
                                    />
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={14}>
                            <Card style={{ height: '100%' }} title={<Typography.Title style={{ whiteSpace: 'pre-line' }} level={5}>{product.data.attributes.name}</Typography.Title>}
                            >
                                <Typography.Paragraph >Product Catogery: <Button type="dashed">{product.data.attributes.category}</Button>
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
                                <Divider />
                                <Typography.Paragraph>
                                    Product Director: Daniel Nguyen (Mr.)
                                    <br />
                                    Whatsapp: <a href="tel:+84979983355">+84 (979) 983-355</a>
                                    <br />
                                    Email: <a href="mailto:Daniel@slmglobal.vn">Daniel@slmglobal.vn</a>
                                </Typography.Paragraph>
                                <Divider />
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
                </div>

            </div>

            <div style={{ padding: '20px 20px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '1440px', width: '100%', height: '100%', position: 'relative' }}>
                    <Carousel autoplay style={{ borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/img/solar-banner-1.jpeg" width={1200} height={200} alt='image' style={{ objectFit: "cover" }} />
                        <Image src="/img/furniture.jpg" width={1200} height={200} alt='image' />
                    </Carousel>
                </div>

            </div>

            <div style={{ padding: '20px 20px 20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '1440px', width: '100%', height: '100%', position: 'relative' }}>
                    <Row gutter={20}>
                        <Col xs={24} sm={24} md={17}>
                            <Card  >
                                <Typography.Paragraph style={{ margin: 0 }}>
                                    <div dangerouslySetInnerHTML={{ __html: product.data.attributes.description }} />
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
                        <Col xs={24} sm={24} md={7}>
                            <div
                                style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px', background: 'white', margin: '0px 20px 0 0', borderRadius: '8px' }}>
                                <Image src="/img/furniture-banner-1.png" alt="ads" width="360" height="640" />
                            </div>
                            <div
                                style={{ width: '100%', position: 'sticky', top: '20px', display: 'flex', justifyContent: 'center', padding: '20px', background: 'white', margin: '50px 20px 0 0', borderRadius: '8px' }}>

                                <FormContact />
                            </div>
                        </Col>
                    </Row>
                </div>

            </div>

            <ProductFooterModule />
        </>
    );

}

export default ProductDetail;