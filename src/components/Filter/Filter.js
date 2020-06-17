//import React from 'react';
//import PropTypes from 'prop-types';

//const Filter = ({ hanleFilterChange }) => {
  //return (
    //<div>
     // <h3>Find your contact:</h3>
     // <input type="text" 
     // onChange={hanleFilterChange} name="filter"
     // placeholder="Put your query here..." />
   // </div>
  //);
//};

//export default Filter;

  
import React from 'react';
import PropTypes from 'prop-types';
const Filter = ({ value, hanleFilterChange}) => {
 return (
  <div>
   <h3>Find your contact:</h3>
    <input type="text"
    value = {value}
    onChange={hanleFilterChange}
     maxLength={20}
      placeholder="Put your query here..."
    /> 
  </div>
);
 };
 

 Filter.propTypes = {
  hanleFilterChange: PropTypes.func.isRequired,
};

export default Filter;


