'use client'
import { Row, Col, Layout, Button } from 'antd';
import FormContact from '../component/form.contact';
import { Content } from 'antd/es/layout/layout';
import Link from 'next/link';
import { StarFilled, PhoneOutlined, MailOutlined, EnvironmentOutlined, HomeOutlined } from '@ant-design/icons';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <Layout >
            <Row gutter={30} style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
                <Content style={{ maxWidth: '1440px', width: '100%', margin: '0 auto', padding: '0px 0', display: 'flex', paddingTop: '20px' }}>
                    <Col xs={24} sm={24} md={16}>
                        <Content style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div style={{ minWidth: '200px', width: '100%', maxWidth: '470px', zIndex: '2' }}>
                                <h1 style={{ fontSize: '60px', fontWeight: '700', color: '#17274f' }}>Contact Us</h1>
                                <p style={{ fontSize: '20px', fontWeight: '300', lineHeight: '1.4' }}>Please contact us if you would like to arrange a free 20-minutes call. We will be delighted if we can consult to know your requirements exactly and suggest the best solutions in some industrial sectors: Iron and Steel Casting, Ground Mounting Screw, Rubber and Silicone, Extruded Aluminum, and Fabrication Service, made in Vietnam.</p>
                                <div style={{ border: 'dashed 1px #17274f', borderRadius: '8px', padding: '0 20px 0' }}>
                                    <h3 style={{ color: '#17274f' }}>COMPANY OFFICE CONTACT</h3>
                                    <Row style={{ display: 'flex', alignItems: 'center', margin: '-15px 0 -10px' }}>
                                        <Col ><HomeOutlined style={{ fontSize: '18px', padding: '0px 10px 18px 0px' }} /> </Col>
                                        <Col><p style={{ fontSize: '16px' }}> Diamond Flower Tower, Hoang Đao Thuy Street,<br />Thanh Xuân Dist, Hanoi City, Vietnam</p></Col>
                                    </Row>
                                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                                        <Col><EnvironmentOutlined style={{ fontSize: '18px', padding: '0px 10px 0px 0px' }} />  </Col>
                                        <Col><Link target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/Q4AAR2xs7yRA2kQT6" style={{ fontSize: '16px' }}><Button danger shape="round" style={{ background: 'none' }}>View on google maps</Button></Link></Col>
                                    </Row>
                                    <Row style={{ display: 'flex', alignItems: 'center', marginTop: '-10px' }}>
                                        <Col><MailOutlined style={{ fontSize: '18px', padding: '0px 10px 0px 0px' }} />  </Col>
                                        <Col><p style={{ fontSize: '16px' }}>info@slmglobal.vn</p></Col>
                                    </Row>


                                </div>
                            </div>
                        </Content>

                        <div style={{ position: 'absolute', top: -40, right: -530, zIndex: '1' }}>
                            <Image src="/img/vietnam-map.png" alt="Vietnam map slmglobal" height={800} width={1600} />
                        </div>
                        <div style={{ position: 'absolute', top: 85, right: 320, zIndex: '3' }}>
                            <Link target='_blank' rel='noopener noreferrer' href="https://maps.app.goo.gl/Q4AAR2xs7yRA2kQT6"><StarFilled style={{ fontSize: '20px', color: 'orange' }} /></Link>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={8} style={{ background: '#fff', zIndex: '5', border: 'solid 1px #0d0d0d0d', borderRadius: '8px', padding: '0 20px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <h1 style={{ color: '#17274f', fontWeight: '300' }}>Get Quotation</h1>
                        <FormContact />
                    </Col>
                </Content>
            </Row>
            <Row style={{ zIndex: '99', marginTop: '20px' }}>
                <Content style={{ maxWidth: '1440px', width: '100%', margin: '0 auto' }}>
                    <Row gutter={30} style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '10px 50px 10px' }}>
                                <h3>International Sale Manager: Tracy Dang (Ms.)</h3>
                                <p><PhoneOutlined />   <Link style={{ color: 'white' }} href="https://wa.me/84989040651"> Whatsapp: +84 (989) 040-651</Link></p>
                                <p><MailOutlined />  <Link style={{ color: 'white' }} href="mailto:Tracy@slmglobal.vn">Email: Tracy@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '10px 50px 10px' }}>
                                <h3>Product Director: Daniel Nguyen (Mr.)</h3>
                                <p><PhoneOutlined />    <Link style={{ color: 'white' }} href='https://wa.me/84979983355' target="_blank" > Whatsapp: +84 (979) 983-355</Link></p>
                                <p><MailOutlined />  <Link style={{ color: 'white' }} href="mailto:Daniel@slmglobal.vn">Email: Daniel@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8}>
                            <div style={{ backgroundColor: '#2234ae', backgroundImage: ' linear-gradient(315deg, #2234ae 0%, #191714 74%)', color: 'white', borderRadius: '8px', padding: '10px 50px 10px' }}>
                                <h3>Technical Manager: Victor Nguyen (Mr.)</h3>
                                <p><PhoneOutlined />    <Link style={{ color: 'white' }} href="https://wa.me/84969862033">Whatsapp: +84 (969) 862-033</Link></p>
                                <p><MailOutlined />   <Link style={{ color: 'white' }} href="mailto:Victor@slmglobal.vn">Email: Victor@slmglobal.vn</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Content>
            </Row>

        </Layout>
    );
};

export default ContactPage;