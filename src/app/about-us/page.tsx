'use client'
import { Col, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderMain from "../component/header.main";


const AboutUsPage: React.FC = () => {

    return (
        <>
            <HeaderMain
                hpctitle='About Us'
                hpcsubtitle=' '
                hpcbackground='/img/shipping-and-importing-header.jpg'
            />
            <Layout >
                <Content style={{ background: '#17274f' }}>
                    <Content style={{ margin: 'auto', width: '100%', maxWidth: '1440px' }} >
                        <Row gutter={16} style={{ display: 'flex', alignItems: 'center' }}>
                            <Col span={12}>
                                <div style={{ margin: '0 auto', display: 'flex', alignItems: 'center', minHeight: '500px', maxWidth: '800px' }}>
                                    <Typography.Title style={{ color: ' white', fontSize: '28px', fontWeight: 200, padding: '0 30px', textAlign: 'left', lineHeight: '1.6' }}>
                                        “ Our mission at SLM Investment ., JSC is to build a brighter future for the world by promoting clean and sustainable energy use. We are committed to bringing innovative and efficient solar solutions to both households and businesses in Vietnam.”
                                    </Typography.Title>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <iframe
                                        width="560"
                                        height="315"
                                        src="https://www.youtube.com/embed/xMtAS9VO0cA?si=FGNFaVpqssBpJbaS"
                                        title="SLM Global Introduction"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Content>
                <Content>
                    <Content style={{ margin: 'auto', width: '100%', maxWidth: '1440px' }} >

                        <Typography.Title style={{ paddingTop: '50px', textTransform: 'uppercase', color: '#17274f', fontSize: '38px', fontWeight: 700, padding: '0 30px' }}>
                            Core Values
                        </Typography.Title>

                        <Typography.Paragraph style={{ color: '#115cfa', fontSize: '24px', lineHeight: '1.4', fontWeight: 300, padding: '0 30px' }}>
                            With foresight and commitment to constantly striving for perfection, we have been constantly striving to bring the best dedication and quality to our customers.
                        </Typography.Paragraph>
                        <Divider />
                    </Content>
                    <Row gutter={16} style={{ margin: 'auto', width: '100%', maxWidth: '1440px', padding: '0 30px' }}>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ flex: '20%', alignItems: 'center' }}>
                            <p style={{ fontSize: '25px', color: '#17274f' }}>
                                Creativity and Innovation
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={19} xl={19} style={{ flex: '80%', alignItems: 'center' }}>
                            <p style={{ fontWeight: '300', paddingLeft: '72px', fontSize: '20px', color: '#115cfa' }}>
                                We are always looking for new and innovative solutions to meet the needs of our customers. We encourage innovation and are willing to push the limits to deliver cutting-edge clean energy solutions.
                            </p>
                        </Col>
                        <Divider />
                    </Row>

                    <Row gutter={16} style={{ margin: 'auto', width: '100%', maxWidth: '1440px', padding: '0 30px' }}>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ flex: '20%', alignItems: 'center' }}>
                            <p style={{ fontSize: '25px', color: '#17274f' }}>
                                Quality and Reliability

                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={19} xl={19} style={{ flex: '80%', alignItems: 'center' }}>
                            <p style={{ fontWeight: '300', paddingLeft: '72px', fontSize: '20px', color: '#115cfa' }}>
                                Quality and reliability are our core principles. We are committed to providing high quality products and services, ensuring maximum performance and reliability in every project.
                            </p>
                        </Col>
                        <Divider />
                    </Row>
                    <Row gutter={16} style={{ margin: 'auto', width: '100%', maxWidth: '1440px', padding: '0 30px' }}>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ flex: '20%', alignItems: 'center' }}>
                            <p style={{ fontSize: '25px', color: '#17274f' }}>
                                Devotion and Consulting
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={19} xl={19} style={{ flex: '80%', alignItems: 'center' }}>
                            <p style={{ fontWeight: '300', paddingLeft: '72px', fontSize: '20px', color: '#115cfa' }}>
                                We are dedicated to listening to our customers and understanding their needs. We not only provide products, but also act as trusted consultants, helping customers choose the most suitable solution.
                            </p>
                        </Col>
                        <Divider />
                    </Row>
                    <Row gutter={16} style={{ margin: 'auto', width: '100%', maxWidth: '1440px', padding: '0 30px' }}>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ flex: '20%', alignItems: 'center' }}>
                            <p style={{ fontSize: '25px', color: '#17274f' }}>
                                Sustainability and Environment
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={19} xl={19} style={{ flex: '80%', alignItems: 'center' }}>
                            <p style={{ fontWeight: '300', paddingLeft: '72px', fontSize: '20px', color: '#115cfa' }}>
                                We are committed to promoting the use of renewable energy to make a positive contribution to environmental protection. We aim to build a sustainable future and help minimize the negative impact on the planet.
                            </p>
                        </Col>
                        <Divider />
                    </Row>
                    <Row gutter={16} style={{ margin: 'auto', width: '100%', maxWidth: '1440px', padding: '0 30px' }}>
                        <Col xs={24} sm={24} md={6} lg={5} xl={5} style={{ flex: '20%', alignItems: 'center' }}>
                            <p style={{ fontSize: '25px', color: '#17274f' }}>
                                Cooperation and Relationship Building
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={18} lg={19} xl={19} style={{ flex: '80%', alignItems: 'center' }}>
                            <p style={{ fontWeight: '300', paddingLeft: '72px', fontSize: '20px', color: '#115cfa' }}>
                                We believe that success comes from close cooperation and building long-term relationships with customers, partners and the community. We put this relationship first.
                            </p>
                        </Col>
                    </Row>
                </Content>
            </Layout >
        </>
    )
};

export default AboutUsPage;
