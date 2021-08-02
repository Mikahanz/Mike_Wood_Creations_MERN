import React from 'react';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <header className='section-header'>
      <section className='header-top-light border-bottom'>
        <div className='container'>
          <nav className='d-flex flex-column flex-md-row'>
            <ul className='nav mr-auto d-none d-md-flex'>
              <li>
                <a href='#/' className='nav-link px-2'>
                  {' '}
                  <i className='fab fa-facebook'></i>{' '}
                </a>
              </li>
              <li>
                <a href='#/' className='nav-link px-2'>
                  {' '}
                  <i className='fab fa-instagram'></i>{' '}
                </a>
              </li>
              <li>
                <a href='#/' className='nav-link px-2'>
                  {' '}
                  <i className='fab fa-twitter'></i>{' '}
                </a>
              </li>
            </ul>
            <ul className='nav'>
              <li className='nav-item'>
                <a href='#/' className='nav-link'>
                  {' '}
                  Delivery{' '}
                </a>
              </li>
              <li className='nav-item'>
                <a href='#/' className='nav-link'>
                  {' '}
                  Help{' '}
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  href='#/'
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                >
                  {' '}
                  USD{' '}
                </a>
                <ul className='dropdown-menu dropdown-menu-right'>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      AED
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      RUBL{' '}
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  href='#/'
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                >
                  {' '}
                  Language{' '}
                </a>
                <ul className='dropdown-menu dropdown-menu-right'>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      English
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      Arabic
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#/'>
                      Russian{' '}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </section>

      <section className='header-main border-bottom'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-sm-4 col-12'>
              <a href='/' className='brand-wrap'>
                <img className='logo' src='../images/mwc-logo.png' alt='logo' />
              </a>
            </div>

            <SearchBar />

            <div className='col-lg-5 col-xl-4 col-sm-12'>
              <div className='widgets-wrap float-md-right'>
                <a href='#/' className='widget-header mr-2'>
                  <div className='icon'>
                    <i className='icon-sm rounded-circle border fa fa-shopping-cart'></i>
                    <span className='notify'>1</span>
                  </div>
                </a>
                <a href='#/' className='widget-header mr-2'>
                  <div className='icon'>
                    <i className='icon-sm rounded-circle border fa fa-heart'></i>
                  </div>
                </a>
                <div className='widget-header dropdown'>
                  <a href='#/' data-toggle='dropdown' data-offset='20,10'>
                    <div className='icontext'>
                      <div className='icon'>
                        <i className='icon-sm rounded-circle border fa fa-user'></i>
                      </div>
                      <div className='text'>
                        <small className='text-muted'>Sign in | Join</small>
                        <div>
                          My account <i className='fa fa-caret-down'></i>{' '}
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className='dropdown-menu dropdown-menu-right'>
                    <form className='px-4 py-3'>
                      <div className='form-group'>
                        <label>Email address</label>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='email@example.com'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          placeholder='Password'
                        />
                      </div>
                      <button type='submit' className='btn btn-light'>
                        Sign in
                      </button>
                    </form>
                    <hr className='dropdown-divider' />
                    <a className='dropdown-item' href='#/'>
                      Have account? Sign up
                    </a>
                    <a className='dropdown-item' href='#/'>
                      Forgot password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className='navbar navbar-main navbar-expand-lg border-bottom'>
        <div className='container'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#main_nav5'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='main_nav5'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link pl-0' href='#/'>
                  {' '}
                  <strong>Product Collections</strong>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#/'>
                  Mens
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#/'>
                  Womens
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#/'>
                  Kids
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#/'>
                  All Products
                </a>
              </li>
              {/* <li className="nav-item">
                    <a className="nav-link" href="#/">Fitness sport</a>
                  </li> */}
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='http://example.com'
                  data-toggle='dropdown'
                  aria-expanded='false'
                >
                  More
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='#/'>
                    Foods and Drink
                  </a>
                  <a className='dropdown-item' href='#/'>
                    Home interior
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#/'>
                    Category 1
                  </a>
                  <a className='dropdown-item' href='#/'>
                    Category 2
                  </a>
                  <a className='dropdown-item' href='#/'>
                    Category 3
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
