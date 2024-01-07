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
        <Layout>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Content
                    style={{
                        minHeight: 120,
                        color: '#fff',
                        maxWidth: 866,
                    }}>
                    <div style={{ padding: '50px 20px 20px', display: 'flex', justifyContent: 'center' }}>
                        <Card
                            style={{ maxWidth: '1440px', width: '100%', height: '100%', position: 'relative' }}
                            title={<Typography.Title level={4} style={{ whiteSpace: 'pre-line' }}>{post.data.attributes.title}</Typography.Title>}
                        >
                            <Meta
                                description={
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
                    </div>
                </Content>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    width="350px"
                    style={{
                        lineHeight: '120px',
                        color: '#fff',
                        background: 'none',
                    }}>
                    <div
                        style={{ background: 'white', margin: '50px 20px 0 0', borderRadius: '8px' }}>
                        <Card title={<Typography.Title level={4}>News Feature</Typography.Title>}>

                        </Card>


                    </div>
                </Sider>
            </div>

        </Layout>

    );

}

export default PostContent;