import React from 'react';

const ProductSectHeading: React.FC = () => {
  return (
    <>
      <header className='border-bottom mb-4 pb-3'>
        <div className='form-inline'>
          <h3 className='class="mr-md-auto" section-title'>Products</h3>
          <span className='mx-3'> </span>
          <span className='mr-md-auto'> 32 Items found </span>
          <select className='mr-2 form-control'>
            <option>Latest items</option>
            <option>Trending</option>
            <option>Most Popular</option>
            <option>Cheapest</option>
          </select>
          <div className='btn-group '>
            <a
              href='#/'
              className='btn btn-outline-secondary'
              data-toggle='tooltip'
              title='List view'
            >
              <i className='fa fa-bars'></i>
            </a>
            <a
              href='#/'
              className='btn  btn-outline-secondary active'
              data-toggle='tooltip'
              title='Grid view'
            >
              <i className='fa fa-th'></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProductSectHeading;
