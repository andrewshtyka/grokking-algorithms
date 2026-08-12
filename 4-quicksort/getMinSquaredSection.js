/**
 * Divide field evenly into square sections
 */
const result = getMinSquaredSection(1680, 640);
console.log(result);

function getMinSquaredSection(width = 0, height = 0) {
    // base case
    if (width === height) return width;

    // decrease problem
    const minSide = width < height ? width : height;
    const maxSide = width > height ? width : height;
    const delta = maxSide - minSide;

    return getMinSquaredSection(minSide, delta);
};