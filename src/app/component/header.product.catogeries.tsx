
import { Carousel, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";
interface HeaderProductCatogeriesProps {
    hpcbackground: string;
    hpctitle?: string;
    hpcsubtitle: string;
    data: DataItem[];
}

interface DataItem {
    title: string;
}

const HeaderProductCatogeries = ({ hpcbackground = '', hpctitle, hpcsubtitle, data }: HeaderProductCatogeriesProps) => {
    const width = 100 / data.length;

    return (
        <>
            <Content style={{ width: '100%', position: 'relative', height: '850px', marginTop: '-20px' }}>
                <Content style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '500px', textAlign: "center", backgroundImage: `url('${hpcbackground}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', left: '50%', position: 'absolute', translate: '-50% -50px' }}>
                    <div style={{ backgroundImage: 'linear-gradient(to bottom, #17274f, #00000020,  #00000090)', width: '100%', height: '100%', position: 'absolute' }}>
                    </div>
                    <div style={{ color: 'white', zIndex: '99', position: 'absolute', left: '50%', translate: '-50% 80%' }}>
                        <h1 style={{ fontSize: '42px', fontWeight: '500' }}>{hpctitle}</h1>
                        <h3 style={{ fontSize: '32px', fontWeight: '100' }}>{hpcsubtitle}</h3>
                    </div>
                </Content>
                <Content style={{ height: '190px', width: '100%', maxWidth: '1440px', background: 'white', borderRadius: '8px', position: 'absolute', top: '450px', left: '50%', translate: '-50% -50px', boxShadow: '0 0 12px 0 rgba(0,0,0,.2)' }}>
                    <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        {data.map((item, index) => {
                            return ((
                                <Col key={index} style={{ position: 'relative', width: `${width}%` }}>
                                    <div style={{ height: '120px', width: '120px', maxWidth: '1440px', background: '#dfdfdf', borderRadius: '50%', position: 'absolute', top: '70px', left: '50%', translate: '-50% -50px' }}>
                                    </div>
                                    <div style={{ position: 'absolute', top: '200px', left: '50%', translate: '-50% -70px' }}>
                                        <h5 style={{ textTransform: "uppercase", textAlign: 'center' }}>{item.title}</h5>
                                    </div>
                                </Col>
                            ))
                        })}
                    </Row>
                </Content>
                <Content style={{ height: '200px', width: '100%', maxWidth: '1440px', background: 'white', borderRadius: '8px', position: 'absolute', top: '680px', left: '50%', translate: '-50% -50px', boxShadow: '0 0 12px 0 rgba(0,0,0,.2)' }}>
                    <div >
                        <Carousel autoplay style={{ borderRadius: '8px', overflow: 'hidden' }}>
                            <Image src="/img/solar-banner-1.jpeg" width={1200} height={200} alt='image' style={{ objectFit: "cover" }} />
                            <Image src="/img/furniture.jpg" width={1200} height={200} alt='image' />
                        </Carousel>
                    </div>
                </Content>
            </Content>

        </>
    )
}

export default HeaderProductCatogeries;
