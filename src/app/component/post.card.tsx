'use client'

import { Card, Skeleton, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Meta from 'antd/es/card/Meta';



type PostCardProps = {
    post: any;

};

const PostCard: React.FC<PostCardProps> = ({ post }) => {



    return (

        <div style={{ padding: '20px 5px 5px' }}>
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
                                            ? `http://api.slmglobal.vn${post.attributes.Thumbail.data.attributes.formats.medium.url}`
                                            : post.attributes.Thumbail.data.attributes.formats.large
                                                ? `http://api.slmglobal.vn${post.attributes.Thumbail.data.attributes.formats.large.url}`
                                                : `http://api.slmglobal.vn${post.attributes.Thumbail.data.attributes.url}`
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

        </div>
    );

}

export default PostCard;