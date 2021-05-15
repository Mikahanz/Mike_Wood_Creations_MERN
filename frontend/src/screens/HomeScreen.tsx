import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { RootStore } from '../store';
import Spinner from '../components/Spinner';
import ProductItems from '../components/ProductItems';

const Homepage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productListState = useSelector((state: RootStore) => state.productList);
  const { loading, products } = productListState;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container mt-4'>
          <div className='row'>
            {products?.map((product) => (
              <div key={product._id} className='col-md-3 col-sm-6'>
                <ProductItems product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
