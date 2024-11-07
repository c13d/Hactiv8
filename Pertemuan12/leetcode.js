function generate(numRows) {
    let result = [[1], [1, 1]];
    for(let i=3;i<numRows;i++) {
        let inside = [result[i-1]]
        const index = 2;
        const newNumbers = [
            ...numbers.slice(0, index),
            3,
            ...numbers.slice(index)
        ];
        inside
    }

    console.log(result)
};

generate(5)
