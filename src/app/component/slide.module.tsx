'use client'
import { Content } from "antd/es/layout/layout";
import { Button, Typography } from 'antd';
import Image from 'next/image'
import Link from "next/link";




interface SlideModuleProps {
    headerTitle?: string;
    backgroundImage: string;
    id?: string;
}

const { Title } = Typography;
const SlideModule = ({ backgroundImage, headerTitle, id }: SlideModuleProps) => {




    return (
        <Content>
            <Content id={id} style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <Title style={{ position: "absolute", left: '50%', textAlign: 'center', paddingTop: '300px', color: 'white', translate: '-50% -50px', zIndex: 2, }}                >
                    {headerTitle}
                </Title>
                <Image
                    src={backgroundImage}
                    width={1920}
                    height={1080}
                    alt={headerTitle || 'default description'}
                    style={{
                        objectFit: "cover",
                        width: '100%',
                        height: '100vh',
                    }}
                />
                <Content style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, height: '100%', width: '100%', opacity: 1, transition: '.3s ease',
                    backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff00,  #00000090)',
                    zIndex: 1,
                }}>
                </Content>
                <Content style={{ position: 'absolute', bottom: '40px', left: '50%', translate: '-50% -50px', zIndex: 2, }}>
                    <Content style={{ display: 'flex', }}>
                        <Button block style={{ width: '246px', margin: '10px', height: '40px' }}><Link href={`/${id}`}>Explore Inventory</Link></Button>
                        <Button ghost style={{ width: '246px', margin: '10px', height: '40px' }}><Link href={'/contact'}>Get free quote</Link></Button>
                    </Content>
                </Content>
            </Content>
        </Content >
    )
}
export default SlideModule;