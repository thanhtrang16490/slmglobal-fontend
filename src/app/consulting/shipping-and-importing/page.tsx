'use client'
import { Col, Divider, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";


const ShippingAndImporting = () => {
    return (
        <Layout >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Content>
                    <Row style={{ position: 'relative', width: '100%', paddingBottom: '15%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                        <div style={{ backgroundImage: `url('/img/shipping-and-importing-header.jpg')`, backgroundSize: 'cover', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.5, zIndex: 1 }} ></div>
                        <Content style={{ maxWidth: '1440px', width: '100%', position: 'relative', zIndex: 2 }}>
                            <Col span={24}>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'white' }}>CONSULTING SERVICES</Typography.Paragraph>
                                <Typography.Title style={{ fontSize: '55px', fontWeight: '400', color: 'white' }}>SHIPPING AND LOGISTICS</Typography.Title>
                            </Col>
                        </Content>
                    </Row >
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Content style={{ maxWidth: '1440px', width: '100%', display: 'flex', }}>
                            <Col span={12}>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}>FASTEST</Typography.Paragraph>
                                <Typography.Title style={{ fontSize: '55px', fontWeight: '400', color: '#17274f' }}>AIR FREIGHT</Typography.Title>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}>We will coordinate air freight to a nearby airport, as well as the final delivery from the airport to your door. Typically, air freight will take about 5-8 days door-to-door. </Typography.Paragraph>
                            </Col>
                            <Col span={12}>
                                <Image src='/img/airplane.png' alt="Airplane" width={500} height={300} />
                            </Col>
                        </Content>
                    </Row>

                    <Row style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Content style={{ maxWidth: '1440px', width: '100%', display: 'flex', }}>
                            <Col span={12}>
                                <Image src='/img/ship-container.png' alt="Airplane" width={500} height={300} />
                            </Col>

                            <Col span={12}>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}>MOST COST EFFECTIVE</Typography.Paragraph>
                                <Typography.Title style={{ fontSize: '55px', fontWeight: '400', color: '#17274f' }}>OCEAN FREIGHT</Typography.Title>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}>We will coordinate air freight to a nearby airport, as well as the final delivery from the airport to your door. Typically, air freight will take about 5-8 days door-to-door. </Typography.Paragraph>
                            </Col>

                        </Content>
                    </Row>
                    <Divider style={{ margin: 0 }} />
                    <Row style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <Content style={{ maxWidth: '1440px', width: '100%', display: 'flex', }}>
                            <Col span={12}>
                                <Image src='/img/mask-group.png' alt="Airplane" width={500} height={522} />
                            </Col>

                            <Col span={12}>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}> FEES AND IMPORT TAXES</Typography.Paragraph>
                                <Typography.Title style={{ fontSize: '55px', fontWeight: '400', color: '#17274f' }}>US CUSTOMS AND IMPORT DUTIES</Typography.Title>
                                <Typography.Paragraph style={{ fontSize: '25px', fontWeight: '200', color: 'black' }}>                            We include all applicable US entry fees and import taxes in your quote. Once the cargo arrives, our customs clearing agent will handle the clearing process for you. Import and logistics are handled by our freight forwarder partner, but we can use any freight forwarder you like if you work already have one you work with. </Typography.Paragraph>
                            </Col>

                        </Content>
                    </Row>
                </Content>
            </div>


        </Layout >
    );
};

export default ShippingAndImporting;