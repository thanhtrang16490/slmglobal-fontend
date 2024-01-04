'use client'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import React from 'react';
import { FloatButton } from 'antd';

const ChatBoxModule: React.FC = () => (
    <>

        <FloatButton.Group
            trigger="hover"
            type="primary"
            style={{ right: 54 }}
            icon={<CustomerServiceOutlined />}
        >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>
    </>
);

export default ChatBoxModule;