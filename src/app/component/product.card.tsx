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

        <div style={{ padding: '20px 5px 5px' }}>
            <Card
                style={{ width: '100%', height: '100%', position: 'relative' }}
                cover={
                    <Link href={`/product/${product.attributes.slug}`}>
                        <div style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
                            <Image
                                style={{ padding: '15px' }}
                                layout="fill"
                                objectFit="cover"
                                src={
                                    product.attributes.feature_image.data && product.attributes.feature_image.data.attributes.formats
                                        ? product.attributes.feature_image.data.attributes.formats.medium
                                            ? `http://api.slmglobal.vn${product.attributes.feature_image.data.attributes.formats.medium.url}`
                                            : product.attributes.feature_image.data.attributes.formats.large
                                                ? `http://api.slmglobal.vn${product.attributes.feature_image.data.attributes.formats.large.url}`
                                                : `http://api.slmglobal.vn${product.attributes.feature_image.data.attributes.url}`
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
                            <Typography.Title level={5} style={{ margin: 0 }}>
                                {product?.attributes?.name}
                            </Typography.Title>

                        </Link>
                    }
                />
            </Card>

        </div>
    );

}

export default ProductCard;