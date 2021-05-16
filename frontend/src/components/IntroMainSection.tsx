import React from 'react';

const IntroMainSection: React.FC = () => {
  return (
    <>
      {/* <!-- ========================= SECTION MAIN ========================= --> */}
      <section className='section-main bg padding-y'>
        <div className='container'>
          <div className='row'>
            <aside className='col-md-3 mb-3'>
              <nav className='card'>
                <ul className='menu-category'>
                  <li>
                    <a href='#/'>Men Wooden Watches</a>
                  </li>
                  <li>
                    <a href='#/'>Women Wooden Watches</a>
                  </li>
                  <li>
                    <a href='#/'>Wooden Bowties</a>
                  </li>
                  <li>
                    <a href='#/'>Leather Bracelet</a>
                  </li>
                  <li>
                    <a href='#/'>Apple Wooden Band</a>
                  </li>
                  <li>
                    <a href='#/'>Kids Bowties</a>
                  </li>
                  <li className='has-submenu'>
                    <a href='#/'>More items</a>
                    <ul className='submenu'>
                      <li>
                        <a href='#/'>Submenu name</a>
                      </li>
                      <li>
                        <a href='#/'>Great submenu</a>
                      </li>
                      <li>
                        <a href='#/'>Another menu</a>
                      </li>
                      <li>
                        <a href='#/'>Some others</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </aside>{' '}
            {/* <!-- col. -->*/}
            <div className='col-md-9'>
              <article className='banner-wrap'>
                <img
                  src='images/banners/banner8.jpg'
                  className='w-100 rounded '
                  alt='image2'
                />
              </article>
            </div>{' '}
            {/*<!-- col. -->*/}
          </div>{' '}
          {/* <!-- row. -->*/}
        </div>{' '}
        {/*<!-- container   --> */}
      </section>
      {/* <!-- ========================= SECTION MAIN END// ========================= --></section> */}
    </>
  );
};

export default IntroMainSection;
