// [1]
function solution(boxes) {
    const result = [];
    let positions = [];

    for (let idx = 0; idx < boxes.length; idx++) {
        const leftPointer = boxes[idx].slice(0, 2).join();
        const rightPointer = boxes[idx].slice(2).join();

        const overlapped = positions.find(position => {
            position = position.join();
            return leftPointer == position || rightPointer == position;
        });

        if (!overlapped || overlapped === undefined) {
            const permutations = findOccupiedPositions(boxes[idx]);
            positions = positions.concat(permutations);
            result.push(idx);
        }
    }
    return result;
}

function findOccupiedPositions(box) {
    const result = [];
    for (let x = box[0]; x <= box[2]; x++) {
        for (let y = box[1]; y <= box[3]; y++) {

            if (!isPointer(x, y, box)) {
                result.push([x, y]);
            }
        }
    }
    return result;
}

function isPointer(x, y, box) {
    return x === box[0] && y === box[1] || x === box[0] && y === box[3] || x === box[2] && y === box[1] || x === box[2] && y === box[3];
}

console.log(solution([
    [1, 1, 3, 3],
    [2, 2, 4, 4],
    [1, 6, 5, 7],
    [3, 3, 5, 5]
]));