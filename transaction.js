// Create the Transaction Module
// Import assets and getAssetById from asset.js

import { assets, getAssetById} from './asset.js';
console.log(assets); 
console.log(getAssetById);

// Define and export a class Transaction
class Transaction {
constructor (assetId, type, quantity) {
    const asset = getAssetById(assetId)
    if (!asset) { 
        throw new Error (`Asset with ID ${assetId} could not be found`)
    } // in case invalid asset ID is submitted

    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;

    // type has to be either buy or sell so:
    if (type !== "sell" && type !== "buy") {
        throw new Error("Transaction could not be completed.");
    }
    
// if statements to determine what transaction it is and update the quantity
    if (type === "buy") {
        asset.quantity += quantity
    }
    if (type === "sell" && quantity > asset.quantity) { 
        throw new Error(`Insufficient quantity for sale of ${asset.name}`);
    } 
    if (type === "sell" && quantity <= asset.quantity) {
         asset.quantity -= quantity
    } 
}

}
export default Transaction; // export the class as default export