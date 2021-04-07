// 두개 뽑아서 더하기
function solution(numbers) {
    const answer = [];

    for (let outer = 0; outer <= numbers.length - 2; outer++) {
        for (let inner = outer + 1; inner <= numbers.length - 1; inner++) {
            const sum = numbers[outer] + numbers[inner];

            if (!answer.includes(sum)) {
                answer.push(sum);
            }
        }
    }
    return answer.sort((a, b) => a - b);
}
// console.log('solution', solution([5, 0, 2, 7]));

// 인형뽑기
function solution(board, moves) {
    const copied = [...board];
    const store = []; // 바구니
    let count = 0; // 제거된 인형의 개수

    for (const move of moves) {
        for (let i = 0; i < copied.length; i++) {
            const value = copied[i][move - 1];

            if (value !== 0) {
                if (value === store[store.length - 1]) {
                    // 같은 인형인 경우, 두 인형 제거
                    store.pop();
                    count += 2;
                } else {
                    // 뽑은 인형 바구니에 저장
                    store.push(value);
                }
                // 뽑은 인형을 인형뽑기 기계에서 제거
                copied[i][move - 1] = 0;
                break;
            }
        }
    }
    return count;
}
const board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
// console.log('solution', solution(board, moves));

// 완주하지 못한 선수
function ascending(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}

function solution(participant, completion) {
    let incompleted = '';
    const sortedParticipant = participant.sort(ascending);
    const sortedCompletion = completion.sort(ascending);

    for (let i = 0; i < sortedParticipant.length; i++) {
        // 두 그룹의 이름이 일치하지 않거나 or 모두 일치하고 참자가 그룹에만 한명이 남은 경우
        if ((sortedParticipant[i] !== sortedCompletion[i]) || (i === sortedParticipant.length - 1)) {
            incompleted = sortedParticipant[i];
            break;
        }
    }
    return incompleted;
}
const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];
// console.log('solution', solution(participant, completion));

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
// console.log('', getMaxDeletions('RRUDRLL'));

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
// console.log('getTime', getTime('BZA'));

function solution(S, A) {
    const message = [S[0]];
    let index = A[0];

    while (index !== 0) {
        message.push(S[index]);
        index = A[index];
    }
    return message.join('');
}

// console.log('solution', solution('cdeo', [3, 2, 0, 1]));

function solution(A) {
    const copied = A.sort((a, b) => a - b);
    let steps = 0;

    const biggestNo = copied[copied.length - 1];
    const smallest = copied[0];
    if (biggestNo === smallest) {
        return steps;
    }

    let standardNo = (biggestNo - (smallest - 1)) / 2;
    let smallNoCount = 0;
    let bigNoCount = 0;

    for (const no of copied) {
        if (no === standardNo) {
            continue;
        }
        else if (no < standardNo) {
            smallNoCount += 1;
        } else {
            bigNoCount += 1;
        }
    }

    const fixNo = Number.isInteger(standardNo) ? 1 : 0.5;

    if ((smallNoCount === bigNoCount && !Number.isInteger(standardNo)) || (smallNoCount > bigNoCount)) {
        standardNo -= fixNo;

    } else if (smallNoCount < bigNoCount) {
        standardNo += fixNo;
    }

    copied.forEach(no => steps += Math.abs(standardNo - no));
    return steps;
}
// console.log('solution', solution([1, 2, 3, 5]));

function solution(Str) {
    const S = Str.split('');
    const result = [];
    let fixedIdx = 0;

    while (fixedIdx < S.length) {
        for (let outer = 0; outer < S.length; outer++) {
            if (outer === fixedIdx) {
                continue;
            }

            for (let inner = 0; inner <= 9; inner++) {
                const copied = [...S];
                copied[outer] = inner;
                const joined = Number(copied.join(''));

                if (joined % 3 === 0) {
                    const exist = result.find(value => value === joined);

                    if (exist === undefined) {
                        result.push(joined);
                    }
                }
            }
        }
        fixedIdx++;
    }
    return result.legnth;
}
console.log('solution', solution('0081'));


function generateRandomNumber(min, max) {
    return Math.floor((Math.random() * (1 + max - min)) + min);
}

function randomArray(n) {
    const array = [];
    let object = {};
    let index = 1;

    while (index <= 2 * n + 1) { // O(n)
        const randomNumber = generateRandomNumber(-100, 200);

        // find if the value exists by checking the key in the object.
        if (!object[randomNumber]) { // O(1)
            array.push(randomNumber);
            object[randomNumber] = true;
            index += 1;
        }
    }
    return array;
}
console.log('randomArray', randomArray(2));
// O(n)