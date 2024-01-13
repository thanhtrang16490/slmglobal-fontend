

import { Content } from "antd/es/layout/layout";

interface HeaderMainProps {
    hpcbackground: string;
    hpctitle?: string;
    hpcsubtitle: string;
}


const HeaderMain = ({ hpcbackground = '', hpctitle, hpcsubtitle }: HeaderMainProps) => {


    return (
        <>
            <Content style={{ width: '100%', position: 'relative', height: '300px', marginTop: '-20px' }}>
                <Content style={{ backgroundColor: 'rgba(0,0,0,.3)', width: '100%', height: '300px', textAlign: "center", backgroundImage: `url('${hpcbackground}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', left: '50%', position: 'absolute', translate: '-50% -50px' }}>
                    <div style={{ backgroundImage: 'linear-gradient(to bottom, #17274f, #00000020,  #00000090)', width: '100%', height: '100%', position: 'absolute' }}>
                    </div>
                    <div style={{ color: 'white', zIndex: '99', position: 'absolute', left: '50%', translate: '-50% 80%' }}>
                        <h1 style={{ fontSize: '42px', fontWeight: '500' }}>{hpctitle}</h1>
                        <h3 style={{ fontSize: '32px', fontWeight: '100' }}>{hpcsubtitle}</h3>
                    </div>
                </Content>
            </Content>

        </>
    )
}

export default HeaderMain;
