import React from 'react';
import { Link } from 'react-router-dom';
import { productDataType } from '../utils/dataTypes';
import RatingStar from './RatingStar';

interface productListProps {
  product: productDataType;
  currency: string;
}

const ProductItems: React.FC<productListProps> = (props) => {
  //   console.log(props.product);

  const { _id, prodImage, prodName, price, rating, reviewsQty } = props.product;

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
        <Link to={`/productdetail/${_id}`} className='title'>
          {prodName}
        </Link>
        <hr />
        <RatingStar rating={rating} reviewQty={reviewsQty} />
        <div className='price mt-2'>
          ${price} {props.currency}
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductItems;
