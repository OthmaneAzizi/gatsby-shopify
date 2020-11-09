import React from 'react';
import { Layout, SEO , HomepageCollectionGrid ,FeaturedProducts} from 'components';
import ProductContext from 'context/ProductContext';
const IndexPage = () => {
const {collections} = React.useContext(ProductContext);
console.log(collections);
  return (
    <Layout>
      <SEO title ="Homepage" description ="Moroccan saffron" />
   <HomepageCollectionGrid collections={collections.filter(collection => collection.title !== 'Featured Hats')} />
 {!!collections.find(collection => collection.title === 'Featured Hats') &&
  <FeaturedProducts />}
    </Layout>
  )
}
export default IndexPage;
