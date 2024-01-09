'use client'
import { Row, Col, Layout, Button } from 'antd';
import FormContact from '../component/form.contact';
import { Content } from 'antd/es/layout/layout';
import Link from 'next/link';
import { StarFilled, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';

const ContactPage = () => {
    return (
        <Layout>
            <Row gutter={50} style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', background: 'white' }}>
                <Content style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0px 0', display: 'flex', paddingTop: '20px' }}>
                    <Col xs={24} sm={24} md={14}>
                        <Content style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ minWidth: '200px', width: '100%', maxWidth: '430px', zIndex: '2' }}>
                                <h1 style={{ fontSize: '60px', fontWeight: '700', color: 'blue' }}>Contact Us</h1>
                                <p style={{ fontSize: '20px', fontWeight: '300' }}>Please contact us if you would like to arrange a free 20-minute call. We will be delighted if we can consult to know your requirements exactly and suggest the best solutions in some industrial sectors: Iron and Steel Casting, Ground Mounting Screw, Rubber and Silicone, Extruded Aluminum, and Fabrication Service, made in Vietnam.</p>
                                <div style={{ border: 'dashed 1px blue', borderRadius: '8px', padding: '0 20px 0' }}>
                                    <h3>COMPANY INFO</h3>
                                    <p style={{ fontSize: '16px' }}><EnvironmentOutlined /> P. Hoàng Đạo Thúy, Trung Hòa Nhân Chính, Thanh Xuân, Hà Nội, Vietnam</p>
                                    <p style={{ fontSize: '16px' }}><MailOutlined /> info@slmglobal.vn</p>
                                </div>
                            </div>
                        </Content>

                        <div style={{ position: 'absolute', top: 0, right: 30, zIndex: '1' }}>
                            <img src="img/vietnam.png" alt="Image" style={{ maxWidth: '100%', height: '680px' }} />
                        </div>
                        <div style={{ position: 'absolute', top: 97, right: 240, zIndex: '3' }}>
                            <Link href="https://maps.app.goo.gl/Q4AAR2xs7yRA2kQT6"><StarFilled style={{ fontSize: '20px', color: 'orange' }} /></Link>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={10}>
                        <h1 style={{ color: 'blue', fontWeight: '300' }}>Get quote</h1>
                        <FormContact />
                    </Col>
                </Content>
            </Row>
            <Row style={{ background: 'white', zIndex: '99' }}>
                <Content style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
                    <Row gutter={30} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '20px 50px 20px' }}>
                                <h3>International Sale Manager: Tracy Dang (Ms.)</h3>
                                <p><PhoneOutlined />   Whatsapp: <Link style={{ color: 'white' }} href="tel:+84989837143">+84 (989) 837-143</Link></p>
                                <p><MailOutlined /> Email: <Link style={{ color: 'white' }} href="mailto:Tracy@slmglobal.vn">Tracy@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '20px 50px 20px' }}>
                                <h3>Product Director: Daniel Nguyen (Mr.)</h3>
                                <p><PhoneOutlined />   Whatsapp:  <Link style={{ color: 'white' }} href="tel:+84979983355">+84 (979) 983-355</Link></p>
                                <p><MailOutlined /> Email: <Link style={{ color: 'white' }} href="mailto:Daniel@slmglobal.vn">Daniel@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '20px 50px 20px' }}>
                                <h3>Technical Manager: Victor Nguyen (Mr.)</h3>
                                <p><PhoneOutlined />   Whatsapp: <Link style={{ color: 'white' }} href="tel:+84969862033">+84 (969) 862-033</Link></p>
                                <p><MailOutlined />  Email: <Link style={{ color: 'white' }} href="mailto:Victor@slmglobal.vn">Victor@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Row>

        </Layout>
    );
};

export default ContactPage;