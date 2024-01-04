'use client'
import { Content } from "antd/es/layout/layout";
import { Button, Typography } from 'antd';
import Image from 'next/image'




interface SlideModuleProps {
    headerTitle?: string;
    backgroundImage: string;
    id?: string;
}

const { Title } = Typography;
const SlideModule = ({ backgroundImage, headerTitle, id }: SlideModuleProps) => {




    return (
        <Content>
            <div id={id}
                style={{ position: 'relative', width: '100%', height: '100vh' }
                }>
                <Title
                    style={{
                        position: "absolute",
                        left: '50%',
                        textAlign: 'center',
                        paddingTop: '300px',
                        color: 'white',
                        translate: '-50% -50px',
                        zIndex: 2,
                    }}
                >{headerTitle}</Title>
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
                <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    width: '100%',
                    opacity: 1,
                    transition: '.3s ease',
                    // backgroundColor: '#000',
                    backgroundImage: 'linear-gradient(to bottom, #000000, #ffffff00,  #00000090)',
                    zIndex: 1,
                }}>

                </div>


                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        translate: '-50% -50px',
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Button ghost style={{ margin: '10px' }}>More detail</Button>
                        <Button ghost style={{ margin: '10px' }}>Get free quote</Button>
                    </div>
                </div>
            </div>


        </Content >
    )
}
export default SlideModule;