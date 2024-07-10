
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProductPage = ({ product }: { product: any }) => {
  const router = useRouter();

  useEffect(() => {
    
    console.log('Fetching product:', product);
  }, [product]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Product ID: {product.id}</p>
      
    </div>
  );
};

export const getStaticPaths = async () => {
  
  const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' },
  ];

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return { paths, fallback: true };
};

import { GetStaticPropsContext } from 'next';

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  
  const productId = params?.productId; 
  const product = { id: productId, name: `Product ${productId}` }; 

  return {
    props: {
      product,
    },
    revalidate: 1, 
  };
};

export default ProductPage;
