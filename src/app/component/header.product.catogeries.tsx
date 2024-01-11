
import { Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import Image from "next/image";

interface HeaderProductCatogeriesProps {
    hpcbackground: string;
    hpctitle?: string;
    hpcsubtitle: string;
    hpccatogeries?: string;
}


const HeaderProductCatogeries = ({ hpcbackground = '', hpctitle, hpcsubtitle, hpccatogeries }: HeaderProductCatogeriesProps) => {

    return (
        <Content style={{ width: '100%', position: 'relative', height: '550px', marginTop: '50px' }}>
            <Content style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '240px', textAlign: "center", backgroundImage: `url('${hpcbackground}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', left: '50%', position: 'absolute', translate: '-50% -50px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '100%', position: 'absolute' }}>
                </div>
                <div style={{ color: 'white', zIndex: '99', position: 'absolute', left: '50%', translate: '-50% 10px' }}>
                    <h1 style={{ fontSize: '42px', fontWeight: '500' }}>{hpctitle}</h1>
                    <h3 style={{ fontSize: '32px', fontWeight: '100' }}>{hpcsubtitle}</h3>
                </div>
            </Content>
            <Content style={{ height: '170px', width: '1200%', maxWidth: '1200px', background: 'white', borderRadius: '8px', position: 'absolute', top: '180px', left: '50%', translate: '-50% -50px', boxShadow: '0 0 12px 0 rgba(0,0,0,.2)' }}>
                <h3 style={{ color: '#17274f', textTransform: 'uppercase', lineHeight: '2', width: '600px', margin: '60px auto', textAlign: 'center' }}>{hpccatogeries}</h3>
            </Content>
            <Content style={{ height: '200px', width: '1200%', maxWidth: '1200px', background: 'white', borderRadius: '8px', position: 'absolute', top: '400px', left: '50%', translate: '-50% -50px', boxShadow: '0 0 12px 0 rgba(0,0,0,.2)' }}>
                <div >
                    <Carousel autoplay style={{ borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/img/solar-banner-1.jpeg" width={1200} height={200} alt='image' style={{ objectFit: "cover" }} />
                        <Image src="/img/solar-banner-1.jpeg" width={1200} height={200} alt='image' />
                        <Image src="/img/solar-banner-1.jpeg" width={1200} height={200} alt='image' />

                    </Carousel>

                </div>
            </Content>
        </Content>
    )
}

export default HeaderProductCatogeries;
