'use client'
import { Row, Col, Layout } from 'antd';
import FormContact from '../component/form.contact';
import { Content } from 'antd/es/layout/layout';

const ContactPage = () => {
    return (
        <Layout>
            <Content>
                <Row gutter={16} style={{ height: '100vh' }}>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: '108px' }}>
                        <Content style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{ minWidth: '500px', width: '100%', maxWidth: '720px' }}>
                                <FormContact />
                            </div>

                        </Content>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ backgroundColor: 'blue', color: 'white', padding: '108px', fontFamily: 'Bai Jamjuree, sans-serif' }}>
                        <Content style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ minWidth: '500px', width: '100%', maxWidth: '720px' }}>
                                <h1 style={{ fontSize: '60px', fontWeight: '500' }}>Contact Us</h1>
                                <p style={{ fontSize: '18px', fontWeight: '300' }}>Please contact us if you would like to arrange a free 20-minute call. We will be delighted if we can consult to know your requirements exactly and suggest the best solutions in some industrial sectors: Iron and Steel Casting, Ground Mounting Screw, Rubber and Silicone, Extruded Aluminum, and Fabrication Service, made in Vietnam.</p>
                            </div>

                        </Content>

                    </Col>

                </Row>
            </Content>
        </Layout>
    );
};

export default ContactPage;