import { NextPage } from 'next';
import Page from '@/components/Page';
import ProductList from '@/components/products/ProductList';

const Home: NextPage = () => {
  return (
    <Page>
      <ProductList />
    </Page>
  );
};

export default Home;
