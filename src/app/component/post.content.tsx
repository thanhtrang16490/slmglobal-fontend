'use client'

import { Card, Layout, Typography } from 'antd';
import Image from 'next/image';
import Meta from 'antd/es/card/Meta';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

type PostContentProps = {
    post: any;
};

const PostContent: React.FC<PostContentProps> = ({ post }) => {

    return (
        <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Content style={{ display: 'flex', justifyContent: 'center' }}>
                <Content style={{ color: '#fff', padding: '50px 20px 20px', display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ width: '100%' }}
                        title={<Typography.Title level={4} style={{ whiteSpace: 'pre-line' }}>{post.data.attributes.title}</Typography.Title>}
                    >
                        <Meta description={
                            <div>
                                <div style={{ width: '100%', paddingTop: '66.66%', position: 'relative' }}>
                                    <Image
                                        layout="fill"
                                        objectFit="cover"
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.FeaturedImage.data.attributes.url}`}
                                        alt={post.data.attributes.Title}

                                    />
                                    src={
                                        post.data.attributes.FeaturedImage.data && post.data.attributes.FeaturedImage.data.attributes.formats
                                            ? post.data.attributes.FeaturedImage.data.attributes.formats.medium
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.FeaturedImage.data.attributes.formats.medium.url}`
                                                : post.data.attributes.FeaturedImage.data.attributes.formats.large
                                                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.FeaturedImage.data.attributes.formats.large.url}`
                                                    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.data.attributes.FeaturedImage.data.attributes.url}`
                                            : "/img/place-holder.png"
                                    }
                                </div>
                                <Typography.Paragraph style={{ margin: 0 }}>
                                    <div dangerouslySetInnerHTML={{ __html: post.data.attributes.Content }} ></div>
                                </Typography.Paragraph>
                            </div>
                        }
                        />
                    </Card>

                </Content>
                <Sider breakpoint="lg" collapsedWidth="0" width="400px"
                    style={{ lineHeight: '120px', color: '#fff', background: 'none', }}>
                    <div
                        style={{position:'sticky',top:'20px', display: 'flex', justifyContent: 'center', padding: '20px' , background: 'white', margin: '50px 20px 0 0', borderRadius: '8px' }}>
                    <Image src="/img/furniture-banner-1.png" alt="ads" width="360" height="640" />
                    </div>
                </Sider>
            </Content>
        </Layout>
    );
}

export default PostContent;