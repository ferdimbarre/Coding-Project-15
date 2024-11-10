// create asset module 
// named exports: 
export const assets = [
    {id: 1, name: 'TechCorp Stock', type: 'stock', price: 150, quantity: 50},
    {id: 2, name: 'MarketPlace Bond', type: 'bond', price: 1000, quantity: 20},
    {id: 3, name: 'Bubblegum Stock', type: 'stock', price: 40, quantity: 300},
];
// create function to find asset by id 
export function getAssetById(id){
    const asset = assets.find(asset => asset.id === id);
    // if function to return details if asset found and if not log an error message 
    if (asset) { 
        return asset
    } else {
        console.log("error: asset could not be found");
        return null
    }
};