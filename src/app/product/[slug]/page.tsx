import ProductDetail from "@/app/component/product.detail";

type Params = {
    slug: string;
};


const getData = async (slug: string) => {
    const res = await fetch(`https://api.slmglobal.vn/api/slugify/slugs/product/${slug}?populate=*`);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json();
}

const ProductPage = async ({ params }: { params: Params }) => {


    const { slug } = params;
    const product = await getData(slug);


    return (
        <ProductDetail product={product} />
    );
}

export default ProductPage;

