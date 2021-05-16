import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { RootStore } from '../store';
import Spinner from '../components/Spinner';
import ProductItems from '../components/ProductItems';
import IntroMainSection from '../components/IntroMainSection';
import ProductSectHeading from '../components/ProductSectHeading';
import Pagination from '../components/Pagination';

const Homepage: React.FC = () => {
  const dispatch = useDispatch();

  const defaultCurrency = 'CAD';

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productListState = useSelector((state: RootStore) => state.productList);
  const { loading, products } = productListState;

  return (
    <>
      <IntroMainSection />
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mt-3'>
          <ProductSectHeading />
          <div className='row mt-3'>
            {products?.map((product) => (
              <div key={product._id} className='col-md-3 col-sm-6'>
                <ProductItems product={product} currency={defaultCurrency} />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default Homepage;
