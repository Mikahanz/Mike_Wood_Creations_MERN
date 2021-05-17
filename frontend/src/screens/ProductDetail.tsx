import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { getProductDetail } from '../actions/productActions';
import RatingStar from '../components/RatingStar';
import { RootStore } from '../store';

interface RouteParams {
  id: string;
  param2?: string;
}

const ProductDetail: React.FC<RouteComponentProps<RouteParams>> = ({
  history,
  match,
}) => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootStore) => state.productDetail);

  const { loading, product, errorMsg } = data;

  useEffect(() => {
    dispatch(getProductDetail(match.params.id));
  }, [dispatch, match.params.id]);

  //console.log(product?.prodName);

  return (
    <>
      <section className='section-content padding-y bg'>
        <div className='container'>
          {/* <!-- ============================ COMPONENT 1 ================================= --> */}
          <h3 className='class="mr-md-auto" section-title'>Product Detail</h3>
          <div className='card'>
            <div className='row no-gutters'>
              <aside className='col-md-6'>
                <article className='gallery-wrap'>
                  <div className='img-big-wrap mt-3'>
                    <a href='#/'>
                      <img
                        className='img-fluid'
                        src={product?.prodImage[0].image}
                        alt='imagemissing'
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                    </a>
                  </div>
                  <div className='thumbs-wrap'>
                    <a href='#/' className='item-thumb'>
                      {' '}
                      <img src='../images/items/12-1.jpg' alt='imagemissing' />
                    </a>
                    <a href='#/' className='item-thumb'>
                      {' '}
                      <img src='../images/items/12-2.jpg' alt='imagemissing' />
                    </a>
                    <a href='#/' className='item-thumb'>
                      {' '}
                      <img src='../images/items/12.jpg' alt='imagemissing' />
                    </a>
                    <a href='#/' className='item-thumb'>
                      {' '}
                      <img src='../images/items/4.jpg' alt='imagemissing' />
                    </a>
                  </div>
                </article>
              </aside>
              <main className='col-md-6 border-left'>
                <article className='content-body'>
                  <h2 className='title'>{product?.prodName}</h2>

                  <div className='rating-wrap my-3'>
                    {/* <ul className='rating-stars'>
                      <li style={{ width: '80%' }} className='stars-active'>
                        <img src='../images/icons/stars-active.svg' alt='' />
                      </li>
                      <li>
                        <img src='../images/icons/starts-disable.svg' alt='' />
                      </li>
                    </ul> */}
                    <RatingStar
                      rating={product?.rating!}
                      reviewQty={product?.reviewsQty!}
                    />
                    <small className='label-rating text-success'>
                      {' '}
                      <i className='fa fa-clipboard-check'></i> 154 orders{' '}
                    </small>
                  </div>

                  <div className='mb-3'>
                    <var className='price h4'>${product?.price} CAD</var>
                  </div>

                  <p>{product?.prodDescription}</p>

                  {/* <dl className='row'>
                    <dt className='col-sm-3'>Model#</dt>
                    <dd className='col-sm-9'>Odsy-1000</dd>

                    <dt className='col-sm-3'>Color</dt>
                    <dd className='col-sm-9'>Brown</dd>

                    <dt className='col-sm-3'>Delivery</dt>
                    <dd className='col-sm-9'>Russia, USA, and Europe </dd>
                  </dl> */}

                  <hr />
                  <div className='row'>
                    <div className='form-group col-md flex-grow-0'>
                      <label>Quantity</label>
                      <div className='input-group mb-3 input-spinner'>
                        <div className='input-group-prepend'>
                          <button
                            className='btn btn-light'
                            type='button'
                            id='button-plus'
                          >
                            {' '}
                            +{' '}
                          </button>
                        </div>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='1'
                        />
                        <div className='input-group-append'>
                          <button
                            className='btn btn-light'
                            type='button'
                            id='button-minus'
                          >
                            {' '}
                            &minus;{' '}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='form-group col-md'>
                      <label>Select size</label>
                      <div className='mt-2'>
                        <label className='custom-control custom-radio custom-control-inline'>
                          <input
                            type='radio'
                            name='select_size'
                            className='custom-control-input'
                          />
                          {/*checked={true}*/}
                          <div className='custom-control-label'>Small</div>
                        </label>

                        <label className='custom-control custom-radio custom-control-inline'>
                          <input
                            type='radio'
                            name='select_size'
                            className='custom-control-input'
                          />
                          <div className='custom-control-label'>Medium</div>
                        </label>

                        <label className='custom-control custom-radio custom-control-inline'>
                          <input
                            type='radio'
                            name='select_size'
                            className='custom-control-input'
                          />
                          <div className='custom-control-label'>Large</div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <a href='#/' className='btn btn-outline-secondary'>
                    {' '}
                    <span className='text'>Add to cart</span>{' '}
                    <i className='fas fa-shopping-cart'></i>{' '}
                  </a>
                </article>
              </main>
            </div>
          </div>
          {/* <!-- ============================ COMPONENT 1 END .// ================================= --></hr> */}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
