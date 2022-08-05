function getNeighborCount(row, col) {
    let count = 0;
    let nrow = Number(row);
    let ncol = Number(col);

    if (nrow - 1 >= 0) {
        // 1 Check top neighbor
        if (currGen[nrow - 1][ncol] == 1)
            count++;
    }
    else if (currGen[rows - 1][ncol] == 1) {
        count++;
    }

    if (nrow + 1 < rows) {
        //8 Check bottom neighbor
        if (currGen[nrow + 1][ncol] == 1)
            count++;
    }
    else if (currGen[0][ncol] == 1) {
        count++;
    }

    if (ncol - 1 >= 0) {
        //4 Check left neighbor
        if (currGen[nrow][ncol - 1] == 1)
            count++;
    }
    else if (currGen[nrow][cols - 1] == 1) {
        count++;
    }

    if (ncol + 1 < cols) {
        //5 Check right neighbor
        if (currGen[nrow][ncol + 1] == 1)
            count++;
    }
    else if (currGen[nrow][0] == 1) {
        count++;
    }

    if (nrow - 1 >= 0 && ncol - 1 >= 0 && currGen[nrow - 1][ncol - 1] == 1) {
        //2 Check upper left neighbor
        count++;
    }
    if (ncol == 0 && nrow != 0 && currGen[nrow - 1][cols - 1] == 1) {
        count++;
    }
    if (nrow == 0 && ncol != 0 && currGen[rows - 1][ncol - 1] == 1) {
        count++;
    }
    if (nrow == 0 && ncol == 0 && currGen[rows - 1][cols - 1] == 1) {
        count++;
    }

    if (nrow - 1 >= 0 && ncol + 1 < cols && currGen[nrow - 1][ncol + 1] == 1) {
        //3 Check upper right neighbor
        count++;
    }
    if (ncol == cols-1 && nrow != 0 && currGen[nrow - 1][0] == 1) {
        count++;
    }
    if (nrow == 0 && ncol != 0 && currGen[rows - 1][ncol + 1] == 1) {
        count++;
    }
    if (nrow == rows - 1 && ncol == cols-1 && currGen[0][cols-1] == 1) {
        count++;
    }

    if (nrow + 1 < rows && ncol - 1 >= 0 && currGen[nrow + 1][ncol - 1] == 1) {
        //6 Check bottom left neighbor
        count++;
    }
    if (ncol == 0 && nrow != rows - 1 && currGen[nrow + 1][cols - 1] == 1) {
        count++;
    }
    if (nrow == rows - 1 && ncol != 0 && currGen[0][ncol - 1] == 1) {
        count++;
    }
    if (nrow == rows - 1 && ncol == 0 && currGen[0][cols - 1] == 1) {
        count++;
    }

    if (nrow + 1 < rows && ncol + 1 < cols && currGen[nrow + 1][ncol + 1] == 1) {
        //7 Check bottom right neighbor
        count++;
    }
    if (ncol == cols - 1 && nrow != rows - 1 && currGen[nrow + 1][0] == 1) {
        count++;
    }
    if (nrow == rows - 1 && ncol != cols - 1 && currGen[0][ncol+1] === 1) {
        count++;
    }
    if (nrow == rows - 1 && ncol == cols - 1 && currGen[0][0] == 1) {
        count++;
    }

    return count;
}

/*function getNeighborCount(row, col) {
    let count = 0;
    let nrow = Number(row);
    let ncol = Number(col);

    // Make sure we are not at the first row
    if (nrow - 1 >= 0) {
        // Check top neighbor
        if (currGen[nrow - 1][ncol] == 1)
            count++;
    }
    // Make sure we are not in the first cell
    // Upper left corner
    if (nrow - 1 >= 0 && ncol - 1 >= 0) {
        //Check upper left neighbor
        if (currGen[nrow - 1][ncol - 1] == 1)
            count++;
    }
    // Make sure we are not on the first row last column
    // Upper right corner
    if (nrow - 1 >= 0 && ncol + 1 < cols) {
        //Check upper right neighbor
        if (currGen[nrow - 1][ncol + 1] == 1)
            count++;
    }
    // Make sure we are not on the first column
    if (ncol - 1 >= 0) {
        //Check left neighbor
        if (currGen[nrow][ncol - 1] == 1)
            count++;
    }
    // Make sure we are not on the last column
    if (ncol + 1 < cols) {
        //Check right neighbor
        if (currGen[nrow][ncol + 1] == 1)
            count++;
    }
    // Make sure we are not on the bottom left corner
    if (nrow + 1 < rows && ncol - 1 >= 0) {
        //Check bottom left neighbor
        if (currGen[nrow + 1][ncol - 1] == 1)
            count++;
    }
    // Make sure we are not on the bottom right
    if (nrow + 1 < rows && ncol + 1 < cols) {
        //Check bottom right neighbor
        if (currGen[nrow + 1][ncol + 1] == 1)
            count++;
    }


    // Make sure we are not on the last row
    if (nrow + 1 < rows) {
        //Check bottom neighbor
        if (currGen[nrow + 1][ncol] == 1)
            count++;
    }

    return count;
}*/