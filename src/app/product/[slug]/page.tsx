import HeaderMain from "@/app/component/header.main";
import ProductDetail from "@/app/component/product.detail";

type Params = {
    slug: string;
};


const getData = async (slug: string) => {
    const res = await fetch(`${process.env.BACKEND_URL}slugify/slugs/product/${slug}?populate=*`);
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json();
}

const ProductPage = async ({ params }: { params: Params }) => {


    const { slug } = params;
    const product = await getData(slug);


    return (
        <>
            <HeaderMain
                hpctitle='SLM Global - Best Quality Products From Vietnam'
                hpcsubtitle=' '
                hpcbackground='/img/shipping-and-importing-header.jpg'
            />
            <ProductDetail product={product} />
        </>
    );
}

export default ProductPage;

