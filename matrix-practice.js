let matrixServer = [[0,0,0,0,1], [1,0,0,1,0], [0,1,0,1,0], [1,1,0,0,1]];
let noUpdate = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]

let updateServers = (input) => {
    let updating = true;
    let counter = 0;
    let matrix = input;

    if (!canUpdate(matrix)) {
        return "Can't update"
    }

    while(updating) {
        let newGrid = createGrid(5, 4);
        counter++
        for (i = 0; i < matrix.length; i++) {
            for (j = 0; j < matrix[i].length; j++) {
                let currentCell = matrix[i][j]

                if (i === 0) {
                    if (currentCell === 1) {
                        newGrid[i + 1][j] = 1
                    }
                } else if (i === matrix.length - 1) {
                    if (currentCell === 1) {
                        newGrid[i - 1][j] = 1
                    }
                } else {
                    if (currentCell === 1) {
                        newGrid[i + 1][j] = 1
                        newGrid[i - 1][j] = 1
                    }
                }

                if (j === 0) {
                    if (currentCell === 1) {
                        newGrid[i][j] = 1
                        newGrid[i][j + 1] = 1
                    } 
                } else if (j === matrix[i].length - 1) {
                    if (currentCell === 1) {
                        newGrid[i][j] = 1
                        newGrid[i][j - 1] = 1
                    } 
                } else {
                    if (currentCell === 1) {
                        newGrid[i][j] = 1
                        newGrid[i][j - 1] = 1
                        newGrid[i][j + 1] = 1
                    }
                }
            }
        }
        matrix = newGrid
        updating = isUpdating(matrix)
    }
    console.log(matrix)
    return counter
}

let canUpdate = (input) => {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            let currentCell = input[i][j];
            if (currentCell === 1) {
                return true
            }
        }
    }
    return false
}

let isUpdating = (input) => {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j < input[i].length; j++) {
            let currentCell = input[i][j];
            if (currentCell === undefined) {
                return true
            }
        }
    }
    return false
}

let createGrid = (col, row) => {
    let newGrid = new Array(row);
    for (i = 0; i < newGrid.length; i++) {
        newGrid[i] = new Array(col)
    }

    return newGrid
}

console.log(updateServers(matrixServer))
console.log(updateServers(noUpdate))
