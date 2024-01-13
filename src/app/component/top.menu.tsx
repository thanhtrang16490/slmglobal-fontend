'use client'

import type { MenuProps } from 'antd';
import { Button, Flex, Menu } from 'antd';
import { FilePdfOutlined, InfoCircleFilled, AlibabaOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Content } from 'antd/es/layout/layout';

const topMenuItems: MenuProps['items'] = [
    {
        label:
            <Link href='/'>Home</Link>,
        key: 'home',
    },
    {
        label:
            <Link href='/about-us'>About Us</Link>,
        key: 'about-us',
    },

    {
        label:
            <Link href='/blog'>News</Link>,
        key: 'news',
    },

    {
        label:
            <Link href='/contact' > Conntact</ Link>,
        key: 'contact',
    },
];

const mainMenuItems: MenuProps['items'] = [



    {
        label:
            <Link href='/solar' >Solar</Link>,
        key: 'solar',
    },
    {
        label:
            <Link href='/screw' >Ground Anchor</Link>,
        key: 'screw',
    },
    {
        label:
            <Link href='/aluminum' >Aluminum</Link>,
        key: 'aluminum',
    },
    {
        label:
            <Link href='/steel-casting' > Steel Casting</Link>,
        key: 'steel-casting',
    },
    {
        label:
            <Link href='/rubber' >Rubber</Link>,
        key: 'rubber',
    },
    {
        label:
            <Link href='/wood' >Wood</Link>,
        key: 'wood',
    },
    {
        label:
            <Link href='/pipes' >Pipes</Link>,
        key: 'pipes',
    },
    {
        label:
            <Link href='/brass-vales' >Brass Vales</Link>,
        key: 'brass-vales',
    },
    {
        label:
            <Link href='/palm-plate' >Palm Plate</Link>,
        key: 'palm-plate',
    },
    {
        label:
            <Link href='/grass-straw' >Grass Straw</Link>,
        key: 'grass-straw',
    },


];

const TopMenuComponent: React.FC = () => {
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div style={{ position: 'absolute', top: '0', width: '100%', zIndex: '1000' }}>
            <Content style={{ backgroundColor: '#17274f' }}>
                <Flex justify='space-between' align='center' style={{ maxWidth: '1920px', margin: 'auto' }}>
                    <Link style={{ color: '#fff' }} target='_blank' rel='noopener noreferrer' href='https://slmglobal.trustpass.alibaba.com/'> <Button shape="round" style={{ display: 'flex', alignItems: 'center', color: '#fff', backgroundColor: '#ff6600', border: 'none' }}><AlibabaOutlined style={{ fontSize: '28px', color: '#fff' }} /> Find us on Alibaba</Button></Link>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={topMenuItems} style={{ flex: 'auto', maxWidth: '330px', minWidth: 0, background: 'none' }} theme='dark' />
                </Flex>
            </Content>

            <Content style={{ padding: '10px 0', backgroundColor: '#ffffff00' }}>
                <Flex justify='space-between' align='center' style={{ maxWidth: '1920px', margin: 'auto' }}>
                    <Flex align='center'>
                        <Link href='/'><Image src="/img/slm-global-logo.png" alt="Logo" width={73.52} height={52} priority style={{ width: '100%', height: 'auto' }} /></Link>
                    </Flex>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={mainMenuItems}
                        style={{ backgroundColor: '#ffffff00', color: '#fff', justifyContent: 'center', border: 'none', minWidth: 0, flex: "auto", maxWidth: '1000px' }} />
                    <Flex justify='space-between' gap="middle" align='center'>
                        <Link target='_blank' rel='noopener noreferrer' href='https://indd.adobe.com/view/156a9b15-33b4-46f5-a713-2c71fc8fafbd'> <Button danger shape="round" ><FilePdfOutlined />Company Profile</Button></Link>
                    </Flex>
                </Flex>
            </Content>
        </div>
    );
};

export default TopMenuComponent;
