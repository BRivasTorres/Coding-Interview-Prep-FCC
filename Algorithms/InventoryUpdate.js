// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const newArr = []    
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1.length; j++) {
            let expresion = arr1[i][1] === arr2[j][1]
            if(expresion) {
                newArr.push(arr2[j])
            } 
        }
    }
    
    console.log(newArr)
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