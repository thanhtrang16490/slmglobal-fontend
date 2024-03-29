'use client'
import { WhatsAppOutlined, PhoneOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';

const ChatBoxModule: React.FC = () => (
    <>

        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 54 }}
            icon={<CustomerServiceOutlined />}
            tooltip={<div>Customer service center</div>}
        >
            <FloatButton tooltip={<div>Phone: +84 (989) 040-651</div>} href='tel:+84989040651' target="_blank" icon={<PhoneOutlined />} />
            <FloatButton tooltip={<div>Chat with me via whatsapp</div>} href='https://wa.me/84989040651' target="_blank" icon={<WhatsAppOutlined />} />
        </FloatButton.Group>
    </>
);

export default ChatBoxModule;
