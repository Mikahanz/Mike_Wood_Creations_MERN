import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className='col-lg-4 col-xl-5 col-sm-8 col-12'>
      <form action='#' className='search'>
        <div className='input-group w-100'>
          <input
            type='text'
            className='form-control'
            style={{ width: '55' }}
            placeholder='Search'
          />
          {/* <select className="custom-select"  name="category_name">
                          <option value="">All type</option><option value="codex">Special</option>
                          <option value="comments">Only best</option>
                          <option value="content">Latest</option>
                        </select> */}
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='submit'>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
