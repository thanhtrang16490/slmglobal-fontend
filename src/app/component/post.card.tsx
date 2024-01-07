'use client'

import { Card, Skeleton, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Meta from 'antd/es/card/Meta';
import { Layout } from 'antd';
const { Content } = Layout;

type PostCardProps = {
    post: any;

};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Layout style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Content style={{ padding: '20px 5px 5px' }}>
                <Card
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                    cover={
                        <Link href={`/blog/${post?.attributes.slug}`}>
                            <div style={{ padding: '10px', width: '100%', paddingTop: '66.66%', position: 'relative' }}>
                                <Image
                                    layout="fill"
                                    objectFit="cover"

                                    src={
                                        post.attributes.Thumbail.data && post.attributes.Thumbail.data.attributes.formats
                                            ? post.attributes.Thumbail.data.attributes.formats.medium
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.Thumbail.data.attributes.formats.medium.url}`
                                                : post.attributes.Thumbail.data.attributes.formats.large
                                                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.Thumbail.data.attributes.formats.large.url}`
                                                    : `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.Thumbail.data.attributes.url}`
                                            : "/img/place-holder.png"
                                    }

                                    alt={post.attributes.title}
                                />
                            </div>
                        </Link>
                    }
                >
                    <Meta
                        description={
                            <Link href={`/blog/${post?.attributes.slug}`}>
                                <Typography.Title level={5} style={{ margin: 0 }}>
                                    {post?.attributes?.title}
                                </Typography.Title>

                            </Link>
                        }
                    />
                </Card>
            </Content>

        </Layout>
    );

}

export default PostCard;