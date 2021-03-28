// [1]
function solution(paper) {
    if (paper.length > 1000) {
        return 'Not valid';
    }

    let count = 0; // 논문 개수
    let total = 0; // 논문 인용 횟수의 합
    let gIndex = 0;

    for (let i = 0; i < paper.length; i++) {
        if (!Number.isInteger(paper[i]) || paper[i] <= 0 || paper[i] > 10_000) {
            // ignore
        } else {
            count++;
            total += paper[i];

            if (total >= count * count) {
                gIndex = count;
            } else {
                break;
            }
        }
    }
    return gIndex;
}
// console.log('solution', solution([1, 0, 0, 3, 0, 1]));
// console.log('solution', solution([7, 5, 8, 10, 6, 9, 5]));
// console.log('solution', solution([3, 0, 3, 0, 3, 0]));

// [2]
function solution(n) {
    if (n < 3 || n > 1_000_000_000) {
        return -1;
    }

    const boxes = [5, 3];
    let count = 0;
    let remainingN = n;

    for (let i = 0; i <= boxes.length; i++) {
        if (remainingN < 3) {
            break;
        } else if (remainingN > boxes[i]) {
            const boxToAdd = Math.floor(remainingN / boxes[i]);
            count += boxToAdd;
            remainingN -= boxToAdd * boxes[i];
        }
    }

    if (remainingN > 2) {
        count++;
    }
    if (remainingN !== 0 && remainingN <= 2) {
        count = -1;
    }
    return count;
}
// console.log(solution(15));

// [3]
function solution(n) {
    const bin = n.toString(2).match(/1/g).length;
    let number = n - 1;
    let count = 0;

    while (number > 0) {
        if (number.toString(2).match(/1/g).length === bin) {
            count++;
        }
        number--;
    }
    return count;
}
// console.log(solution(9));

// [4]
function solution(foods) {
    let count = 0;
    const foodsLength = foods.length - 1;

    for (let x = 0; x < foodsLength - 1; x++) {
        for (let y = x + 1; y < foodsLength; y++) {
            const standards = [[0, x], [x + 1, y], [y + 1, foodsLength]];
            let sum = [];
            let index = 0;

            while (standards.length > 0) {
                const picked = standards.shift();
                const nextSum = getSum(picked[0], picked[1], foods);

                sum[index] = nextSum;

                if (index > 0 && sum[index - 1] !== sum[index]) {
                    index = -1;
                    break;
                } else {
                    index++;
                }
            }

            if (index !== -1) {
                count++;
            }
        }
    }
    return count;
}

function getSum(a, b, foods) {
    let sum = 0;
    if (a === b) {
        sum = foods[a];
    } else {
        for (let i = a; i <= b; i++) {
            sum += foods[i];
        }
    }
    return sum;
}
// console.log(solution([1, 2, 3, 0, 3]));

// [5]
function solution(N, relations) {
    const result = [];

    // for (let n = 1; n <= N; n++) {
    const group = findFriends(1, relations, 1);
    // console.log("@@", `[${n}]`, group);
    result.push(group);
    // }
    console.log('@@', result);

}

function findFriends(n, relations, distance) {
    console.log("#####", `[${n}]`, relations, distance);
    const result = [];
    if (distance > 2) {
        return result;
    } else {
        relations.forEach((relation, index) => {
            const found = relation.findIndex(id => id === n);

            if (found !== -1) {
                console.log("findFriends -> found", `[${n}]`, relation);
                const myFriend = found == 0 ? relation[1] : relation[0];
                console.log("findFriends -> myFriend", myFriend);
                result.push(myFriend);

                const filteredRelations = relations.filter(re => re !== relations[index]);
                result.forEach(friend =>
                    findFriends(friend, filteredRelations, distance + 1)
                );

            }
            console.log(result);
        });
    }
    console.log("findFriends -> result", result);
    return result;
}
console.log(solution(5, [[1, 2], [4, 2], [3, 1], [4, 5]]));