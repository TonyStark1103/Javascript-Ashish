// Immidiately invoked function expressions (IIFE)

//  1. When global scope pollutio and variable make confusion to solve that problem
// 2. funciton that run immmideatly ()()

(function chai(){   // its called named iife because it has a name
    return "i am rockstar"
})();

(()=>{
    return "i am rockstar"
})()