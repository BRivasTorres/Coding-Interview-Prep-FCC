// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    const rows = arr1.length
    const cols = arr1[0].length
    const newArr = []
    
    for(let x = 0; x < rows; x++) {
        for(let y = 0; y < cols; y++) {
            let elementExist = arr1[x][1] === arr2[y][1]
            if(elementExist) {
                newArr.push(arr2[y])
            } else {
                newArr.push(arr1[x])
            }
        }
    }
    console.log(newArr)
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);