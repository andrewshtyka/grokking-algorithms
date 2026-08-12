/**
 * Divide field evenly into square sections
 */
const result = getMinSquaredSection(1680, 640);
console.log(result);

function getMinSquaredSection(width = 0, height = 0) {
    // base case
    if (width === height) return width;

    // avoid stack overflow
    if (width < 0.5 && height < 0.5) return Number(width.toFixed(2));

    // decrease problem
    const minSide = width < height ? width : height;
    const maxSide = width > height ? width : height;
    const delta = maxSide - minSide;

    return getMinSquaredSection(minSide, delta);
};