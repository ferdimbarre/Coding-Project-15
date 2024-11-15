// Create the Main Application
// Import calculatePortfolioValue, getPortfolioAllocation, and Transaction class.
import {assets} from "./asset.js";
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import Transaction from "./transaction.js";
console.log(calculatePortfolioValue, getPortfolioAllocation);
console.log(Transaction); 


//Display the total portfolio value and allocation percentages.
const portfolioValue = calculatePortfolioValue (assets);
console.log(`Portfolio value is ${portfolioValue}`); //displays total portfolio value

//to show on webpage:
function portfolioOnScreen (value) {
    const portfolioV = document.getElementById("portfolio-value");
    portfolioV.textContent = `${value.toLocaleString()}`; 
}

function displayPortfolio (assets) {
    const portfolioAllocation = getPortfolioAllocation (assets);
    const allocationList = document.getElementById("allocation-list")
    allocationList.innerHTML =""; //this is to show output on screen

    portfolioAllocation.forEach(asset => {
        console.log(`Asset ${asset.name} represents ${asset.assetPercentage}% of the portfolio`)
    const p = document.createElement("p");
    p.textContent = `${asset.name} represents ${asset.assetPercentage}% of the portfolio`
    allocationList.appendChild(p) })}; //displays allocation of each asset 

    
console.log("Initial portfolio allocation:");

displayPortfolio(assets)

portfolioOnScreen(portfolioValue)
// create new transactions using the default class
const newtransaction1 = new Transaction (1, "sell", 3 ); 
console.log(`Sell 3 units of asset ID 1`);
const newtransaction2 = new Transaction (2, "buy", 15 ); 
console.log(`Buy 15 units of asset ID 2`);
//update after transactions


let updatedPortfolio = calculatePortfolioValue(assets);
portfolioOnScreen(updatedPortfolio)
console.log(`Updated portfolio value after the transactions is $${updatedPortfolio}`)
displayPortfolio(assets); 


