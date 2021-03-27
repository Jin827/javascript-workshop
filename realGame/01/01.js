// [1]
function isOddNumberOfDivisor(n) {
    let result = false;
    let count = 0;

    // 약수는 자기자신을 제외하면, 자기자신의 절반 이하의 숫자만 존재한다. 
    for (let j = 1; j <= n / 2; j++) {
        if (n % j === 0) {
            count++;
        }
    }

    // 약수는 자기자신을 포함한다.
    // 약수의 개수가 홀수인지 체크
    if ((count + 1) % 2 !== 0) {
        result = true;
    }
    return result;
}

function solution(n) {
    if (!Number.isInteger(n) || n > 100_000_000) {
        return 'It can not resolved !!';
    }

    let opendNumbers = 0;

    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            // 1은 항상 열려있다.
            opendNumbers++;
        } else {
            // 약수의 개수가 홀수인 값이 열러있는 문을 반환한다.
            // (1): 열린 문, (0): 닫힌 문
            // ex) 9 -> 1(1), 3(0), 9(1)
            if (Boolean(isOddNumberOfDivisor(i))) {
                opendNumbers++;
            }
        }
    }
    return opendNumbers;
}

// [2]
function isValid(n, r, c) {
    if (!Number.isInteger(n) || 1 > n || n > 10_000_000) {
        return false;
    } else if (!Number.isInteger(r) || 1 > r || r > n) {
        console.log('3');
        return false;
    } else if (!Number.isInteger(c) || 1 > c || c > n) {
        console.log('3');
        return false;
    } else {
        return true;
    }
}

function getXPositions(n) {
    const groups = [];

    for (let i = 1; i <= n; i++) {
        const group = [];
        for (let j = 1; j <= i; j++) {
            group.push(j);
        }
        groups.push(group);
    }

    let count = 1;
    while (count < n) {
        const group = [];

        for (let j = n; j > count; j--) {
            group.push(j);
        }
        groups.push(group);
        count++;
    }
    return groups;
}

function getYPositions(xPositions) {
    return xPositions.map(xPosition => {
        if (xPosition.length === 1) {
            return xPosition;
        }

        const group = [];
        for (let i = xPosition.length - 1; i >= 0; i--) {
            group.push(xPosition[i]);
        }

        // xPosition.reverse() is NOT working..
        return group;
    });
}

function solution(n, r, c) {
    if (!isValid(n, r, c)) {
        return 'Can not resolve!!';
    }

    let result = 0;
    const xPositions = getXPositions(n);
    const yPositions = getYPositions(xPositions);

    const joinedXPositions = xPositions.join().split(',');
    const joinedYPositions = yPositions.join().split(',');

    for (let i = 0; i < joinedXPositions.length; i++) {
        if (joinedXPositions[i] == r && joinedYPositions[i] == c) {
            result = i + 1;
            break;
        }
    }
    return result || 'Not found';
};

console.log(solution(5, 3, 4));