console.log("Hello, World!");

let original = [1, 2, 3, 4];
 
    let reversed = [];
    let count;
 
    console.log("Original Array: ");
    console.log(original);
 
    for (let i = original.length - 1; i >= 0; i--) {
        reversed.push(original[i]);
        count=count+1;
    }
 
    console.log("Reversed Array: ");
    console.log(reversed);
    console.log(count);
