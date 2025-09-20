// import React, { useState } from 'react';
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

// const ExploreFood = () => {
//   const [category, setCategory] = useState('All');
//   const [searchText, setSearchText] = useState('');
//   return (
//     <>
//       <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="input-group mb-3">
//               <select className='form-select mt-2' style={{'maxWidth': '150px'}} onChange={(e) => setCategory(e.target.value)}>
//               <option value="All">All</option>
//                 <option value="Biryani">Biryani</option>
//                 <option value="Burger">Burger</option>
//                 <option value="Cake">Cakes</option>
//                 <option value="Ice cream">Ice Creams</option>
//                 <option value="Pizza">Pizza</option>
//                 <option value="Rolls">Rolls</option>
//                 <option value="Salad">Salad</option>
//               </select>
//               <input type="text" className='form-control mt-2' placeholder='Search your favorite dish...' 
//                 onChange={(e) => setSearchText(e.target.value)} value={searchText} />
//               <button className='btn btn-primary mt-2' type='submit'>
//                 <i className='bi bi-search'></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <FoodDisplay category={category} searchText={searchText} />
//     </>

//   )
// }

// export default ExploreFood;


import React, { useState, useEffect } from 'react';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const ExploreFood = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  // Debug logs to help troubleshoot
  useEffect(() => {
    console.log("Current category:", category);
    console.log("Search text:", searchText);
  }, [category, searchText]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    console.log("Category changed to:", selectedCategory);
    setCategory(selectedCategory);
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    console.log("Search text changed to:", searchValue);
    setSearchText(searchValue);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can add search submission logic here if needed
    console.log("Search submitted with:", { category, searchText });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form onSubmit={handleSearchSubmit}>
              <div className="input-group mb-3">
                <select 
                  className='form-select mt-2' 
                  style={{'maxWidth': '180px'}} 
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All Categories</option>
                  <option value="Biryani">Biryani</option>
                  <option value="Burger">Burger</option>
                  <option value="Cake">Cake</option>
                  <option value="Ice Cream">Ice Cream</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                </select>
                
                <input 
                  type="text" 
                  className='form-control mt-2' 
                  placeholder='Search your favorite dish...' 
                  onChange={handleSearchChange} 
                  value={searchText}
                />
                
                <button className='btn btn-primary mt-2' type='submit'>
                  <i className='bi bi-search'></i> Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Display current filters */}
        <div className="row justify-content-center mb-3">
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">
                {category === 'All' ? 'Showing all categories' : `Showing ${category}`}
                {searchText && ` matching "${searchText}"`}
              </small>
              {(category !== 'All' || searchText) && (
                <button 
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    setCategory('All');
                    setSearchText('');
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Food Display Component */}
      <FoodDisplay category={category} searchText={searchText} />
    </>
  );
};

export default ExploreFood;