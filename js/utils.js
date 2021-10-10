console.log('utils.js is loaded...');

// tests if the value represents an integer
function validateInteger(value){
    // testing for a float value
    var result = validateFloat(value);
    if(result === true){
      // testing if it's a valid integer
      if(value.indexOf('.') >= 0){
        result = false;
      }
    }
    return result;
  }
  
  
  function validateFloat(value){
    var result = true;
    if(isNaN(value) === true || value.length === 0 || value.indexOf(' ') >= 0){
        result = false;
    }
    return result;
  }