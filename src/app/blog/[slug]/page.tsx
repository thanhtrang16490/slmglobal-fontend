
import HeaderMain from '@/app/component/header.main';
import PostContent from '@/app/component/post.content';
import ProductFooterModule from '@/app/component/product.footer';

type Params = {
  slug: string;
};

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.BACKEND_URL}slugify/slugs/blog/${slug}?populate=*`, { next: { revalidate: 86400 } });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return await res.json();
}

const SingleBlogPage = async ({ params }: { params: Params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <>
      <HeaderMain
        hpctitle='Vietnam Economy News'
        hpcsubtitle=' '
        hpcbackground='/img/shipping-and-importing-header.jpg'

      />
      <PostContent post={post} />
      <ProductFooterModule />
    </>

  );
}

export default SingleBlogPage;

