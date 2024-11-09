// create asset module 
// named exports: 
export const assets = [
    {id: 1, name: 'asset a', type: 'stock', price: 30, quantity: 200},
    {id: 2, name: 'asset b', type: 'bond', price: 1000, quantity: 20},
    {id: 3, name: 'asset c', type: 'stock', price: 40, quantity: 300},
];
// create function to find asset by id 
export function getAssetById(id){
    const asset = assets.find(a => a.id === id);
    // if function to return details if asset found and if not log an error message 
    if (asset) { 
        return `${asset.name}, it is a ${asset.type} priced at ${asset.price} and the quantity is ${asset.quantity}`
    } else {
        console.log("error: asset could not be found");
        return null
    }
};