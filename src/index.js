exports.min = function min(array) {
    // if(array===undefined) return 0;
    if (array == null || array.length === 0) return 0;

    let minNumber = array.sort((a, b) => a - b)[0];

    return minNumber;
}

exports.max = function max(array) {
    // if(array===undefined) return 0;
    if (array == null || array.length === 0) return 0;

    let maxNumber = array.sort((a, b) => a - b)[array.length - 1];

    return maxNumber;
}

exports.avg = function avg(array) {
    // if(array===undefined) return 0;
    if (array == null || array.length === 0) return 0;

    let avgResult = array.reduce((sum, current) => sum + current, 0) / array.length;

    return avgResult;
}
