'use client'
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { FilePdfOutlined, InfoCircleFilled, AlibabaOutlined } from '@ant-design/icons';
import Link from 'next/link';

const ProfileDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    
      <Button shape="round" onClick={showDrawer}>
      <FilePdfOutlined />Catalogue
      </Button>
      <Drawer title="SLMGLOBAL CATALOGUES" placement="right" onClose={onClose} open={open}>
      <Button shape="round" ><FilePdfOutlined /> <Link target='_blank' rel='noopener noreferrer' href='https://indd.adobe.com/view/156a9b15-33b4-46f5-a713-2c71fc8fafbd'>Profile</Link></Button>

      </Drawer>
    </>
  );
};

export default ProfileDrawer;