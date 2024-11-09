//Create the Portfolio Module

// Import the assets array from asset.js

import { assets } from './asset.js';
console.log(assets); 


//create new function to calculate value of portfolio
export function calculatePortfolioValue (assets) 
    {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity)
    }, 0);
}; //will calculate the total value of the portoflio 

//create new function to calculate percentage allocation of each asset in the portfolio
export function getPortfolioAllocation (assets) {
return assets.map(asset => 
{ let totalAsset = asset.price * asset.quantity
let assetPercentage = (totalAsset / calculatePortfolioValue (assets))*100
return {id: asset.id, assetPercentage: assetPercentage.toFixed(2)}
}); 
}; 


