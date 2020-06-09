const converter = (aNumber) => {
    if (aNumber > 999 && aNumber < 1000000) {
      return (aNumber / 1000).toFixed(0) + "K";
      
    } else if (aNumber > 1000000) {
      return (aNumber / 1000000).toFixed(0) + "M";
  
    } else if (aNumber > 1000000000) {
      return (aNumber / 1000000000).toFixed(0) + "B";
  }
  }
  export default converter
    
    
    