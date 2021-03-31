function getMaxDeletions(s) {
    let count = 0;
    const array = s.split('');
    const directions = {
        'L': 0, 'R': 0, 'U': 0, 'D': 0
    };

    array.forEach(direction => directions[direction] = directions[direction] + 1);

    if (directions['L'] - directions['R'] >= 0) {
        count += directions['R'] * 2;
    } else {
        count += directions['L'] * 2;
    }

    if (directions['U'] - directions['D'] >= 0) {
        count += directions['D'] * 2;
    } else {
        count += directions['U'] * 2;
    }
    return count;
};
console.log('', getMaxDeletions('RRUDRLL'));

function getTime(s) {
    let times = 0;
    const circle = [];
    const group = ['A', ...s.split('')];

    for (let i = 65; i <= 90; i++) {
        circle.push(String.fromCharCode(i));
    }

    let currentIdx;
    let nextIdx;

    for (let i = 0; i < group.length - 1; i++) {
        currentIdx = circle.findIndex(alphabet => alphabet === group[i]);
        nextIdx = circle.findIndex(alphabet => alphabet === group[i + 1]);

        if (currentIdx === nextIdx) {
            continue;
        } else if (Math.abs(nextIdx - currentIdx) <= 13) {
            times += Math.abs(nextIdx - currentIdx);

        } else {
            times += nextIdx > currentIdx ? Math.abs(26 - nextIdx) + currentIdx : Math.abs(26 - currentIdx) + nextIdx;
        }
    }
    return times;
}
console.log('getTime', getTime('BZA'));