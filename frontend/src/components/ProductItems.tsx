import React from 'react';
import { productListType } from '../action_types/prodListActionTypes';
import RatingStar from './RatingStar';

interface productListProps {
  product: productListType;
}

const ProductItems: React.FC<productListProps> = (props) => {
  //   console.log(props.product);

  const { prodImage, prodName, price, rating, reviewsQty } = props.product;

  return (
    <figure className='card card-product-grid'>
      <div className='img-wrap'>
        <img src={prodImage[0].image} alt={prodImage[0].image} />
        <span className='topbar'>
          <a href='#/' className='float-right'>
            <i className='fa fa-heart'></i>
          </a>
        </span>
        <a className='btn-overlay' href='#/'>
          <i className='fa fa-search-plus'></i> Quick view
        </a>
      </div>
      <figcaption className='info-wrap border-top'>
        <a href='#/' className='title'>
          {prodName}
        </a>
        <hr />
        <RatingStar rating={rating} reviewQty={reviewsQty} />
        <div className='price mt-4 text-center'>${price}</div>
      </figcaption>
    </figure>
  );
};

export default ProductItems;
