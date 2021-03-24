// Use the least amout of coins
function computeChange(coins, amount) {
    let remainingAmount = amount;
    const calculatedChange = {
        numberOfCoins: 0
    };

    for (const coin of coins) { // O(n)
        const count = Math.floor(remainingAmount / coin);
        calculatedChange[coin] = count;
        calculatedChange.numberOfCoins += count;
        remainingAmount -= coin * count;
    }
    return calculatedChange;
}

function computeChangeBruteForce(coins, amount) {
    const results = [];
    for (let i = 0; i < coins.length; i++) { // O(n)
        results.push(computeChange(coins.slice(i), amount));
    }

    let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
    let finalResult;
    for (const result of results) {
        if (result.numberOfCoins < smallestAmountOfCoins) {
            smallestAmountOfCoins = result.numberOfCoins;
            finalResult = result;
        }
    }
    return finalResult;
}

const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;
console.log('computeChange', computeChangeBruteForce(availableCoins, targetAmount));
// Time Complexity: O(n*n) + O(n) ->  O(n^2)