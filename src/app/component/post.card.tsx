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

        <Content style={{ padding: '6px 5px 5px' }}>
            <Card
                style={{ width: '100%', height: '100%', position: 'relative', boxShadow: '0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)' }}
                cover={
                    <Link href={`/blog/${post?.attributes.slug}`}>
                        <div style={{ padding: '10px', width: '100%', paddingTop: '66.66%', position: 'relative' }}>
                            <Image
                                layout="fill"
                                objectFit="cover"

                                src={
                                    post.attributes.FeaturedImage.data && post.attributes.FeaturedImage.data.attributes.formats
                                        ? post.attributes.FeaturedImage.data.attributes.formats.medium
                                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.FeaturedImage.data.attributes.formats.medium.url}`
                                            : post.attributes.FeaturedImage.data.attributes.formats.large
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.FeaturedImage.data.attributes.formats.large.url}`
                                                : `${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.FeaturedImage.data.attributes.url}`
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
                            <Typography.Paragraph style={{ margin: 0, fontSize: '14px', fontWeight: '400' }}>
                                <div style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: post?.attributes?.title }} />
                            </Typography.Paragraph>
                        </Link>
                    }
                />
            </Card>
        </Content>

    );

}

export default PostCard;