let tipcalc = (billedAmount, tipPercent) => {
    var tipval = billedAmount * tipPercent / 100;
    var totalAmount = billedAmount + tipval;
    return totalAmount;
}

// module.exports = tipcalc; //ES5
export {tipcalc}; // ES6

