'use client'

import { Card, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Meta from 'antd/es/card/Meta';



type ProductCardProps = {
    product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {


    return (

        <div style={{ padding: '6px 5px 5px' }}>
            <Card
                style={{ width: '100%', height: '100%', position: 'relative' }}
                cover={
                    <Link href={`/product/${product.attributes.slug}`}>
                        <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                            <Image
                                style={{ padding: '8px' }}
                                fill={true}

                                sizes='(max-width: 600px) 500px, (max-width: 1200px) 300px, 500px'
                                src={
                                    product.attributes.feature_image.data && product.attributes.feature_image.data.attributes.formats
                                        ? product.attributes.feature_image.data.attributes.formats.medium
                                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.feature_image.data.attributes.formats.medium.url}`
                                            : product.attributes.feature_image.data.attributes.formats.large
                                                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.feature_image.data.attributes.formats.large.url}`
                                                : `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.attributes.feature_image.data.attributes.url}`
                                        : "/img/place-holder.png"
                                }

                                alt={product.attributes.name}
                            />
                        </div>
                    </Link>
                }
            >
                <Meta
                    description={
                        <Link href={`/product/${product?.attributes.slug}`}>
                            <Typography.Paragraph style={{ margin: 0, fontSize: '14px', fontWeight: '400' }}>
                                <div style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: product?.attributes?.name }} />
                            </Typography.Paragraph>
                        </Link>
                    }
                />
            </Card>

        </div>
    );

}

export default ProductCard;