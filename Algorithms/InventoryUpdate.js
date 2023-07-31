// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const mergedInventory = [...arr1, ...arr2];
    
    const inventoryObj = {};
    
    for (const item of mergedInventory) {
        const itemName = item[1];
        const quantity = item[0];
        
        if (inventoryObj[itemName]) {
            inventoryObj[itemName] += quantity;
        } else {
            inventoryObj[itemName] = quantity;
        }
    }
    
    const updatedInventory = [];
    for (const itemName in inventoryObj) {
        updatedInventory.push([inventoryObj[itemName], itemName]);
    }
    
    updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));
    
}

let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);