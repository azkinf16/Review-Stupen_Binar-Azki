const getAngkaTerbesarKedua = (arr) => {
    // validation data type of 'arr'
    if (arr === undefined) {
        return "ERROR : Can't continue to validation because undefined object"
    } else if (typeof arr !== 'object') {
        return 'ERROR : Can only enter object data type'
    }

    // declare variable 'largest' and 'secondLargest' 
    let largest = []
    let secondLargest = []

    // iteration to finding second largest of number in array
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }

    

    return secondLargest;
}

const dataAngka = [9,6,7,8,8,9,9,7,8,8]

console.log(getAngkaTerbesarKedua(dataAngka));






