'use client'

import type { MenuProps } from 'antd';
import { Button, Flex, Menu } from 'antd';
import { FilePdfOutlined, InfoCircleFilled, AlibabaOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const topMenuItems: MenuProps['items'] = [
    {
        label:
            <Link href='/'>Home</Link>,
        key: 'home',
    },
    {
        label:
            <Link href='/'>About Us</Link>,
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
            <Link href='/product' >Solar</Link>,
        key: 'solar',
    },
    {
        label:
            <Link href='/product' >Screw</Link>,
        key: 'screw',
    },
    {
        label:
            <Link href='/product' >Aluminum</Link>,
        key: 'aluminum',
    },
    {
        label:
            <Link href='/product' > Steel Casting</Link>,
        key: 'steel-casting',
    },
    {
        label:
            <Link href='/product' >Rubber</Link>,
        key: 'rubber',
    },
    {
        label:
            <Link href='/product' >Wood</Link>,
        key: 'wood',
    },
    {
        label:
            <Link href='/product' >Pipes</Link>,
        key: 'pipes',
    },
    {
        label:
            <Link href='/product' >Palm Plate</Link>,
        key: 'Palm-plate',
    },
    {
        label:
            <Link href='/product' >Grass Straw</Link>,
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
        <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '1000' }}>
            <Flex justify='space-around' align='center' style={{ backgroundColor: '#000' }} >
                <Button shape="round" style={{ backgroundColor: '#ff6600', border: 'none' }}><AlibabaOutlined style={{ color: '#fff' }} /> <Link style={{ color: '#fff' }} target='_blank' rel='noopener noreferrer' href='https://slmglobal.trustpass.alibaba.com/'>Find us on Alibaba</Link></Button>
                <div></div>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={topMenuItems} style={{ minWidth: 0, flex: "auto", maxWidth: '330px', lineHeight: '40px', backgroundColor: '#000' }} theme='dark' />
            </Flex>

            <div style={{ padding: '10px 0', backgroundColor: '#fff' }}>
                <Flex justify='space-evenly' align='center' >
                    <Flex align='center'>

                        <Link href='/'><Image src="/img/slm-global-logo.png" alt="Logo" width={73.52} height={52} priority /></Link>
                    </Flex>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={mainMenuItems}
                        style={{ justifyContent: 'center', background: 'none', border: 'none', minWidth: 0, flex: "auto", maxWidth: '1000px' }} />
                    <Flex justify='space-evenly' gap="middle" align='center'>


                        <Button shape="round" ><FilePdfOutlined /> <Link target='_blank' rel='noopener noreferrer' href='https://indd.adobe.com/view/156a9b15-33b4-46f5-a713-2c71fc8fafbd'>Profile</Link></Button>

                    </Flex>
                </Flex>


            </div>
        </div>
    );
};

export default TopMenuComponent;
