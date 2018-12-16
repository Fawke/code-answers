function printPattern(num) {
    const arr = [];
    for (let i = 0; i < Math.pow(num, 2); i++) {
        arr.push(i + 1);
    }

    let lower = 0;
    let upper = 1;

    arr
        .map((elem, index) => {
            if (index === 0) {
                process.stdout.write(`${elem.toString()} `);
                return undefined;
            } else if (lower < (index/num) && (index/num) < upper) {
                process.stdout.write(`${elem.toString()} `);
                return undefined;
            } else if ((index !== 0) && index%num === 0) {
                if ((index/num)%2 === 0) {
                    process.stdout.write(`${elem.toString()} `);
                    return undefined;
                } else {
                    lower = lower + 2;
                    upper = upper + 2;
                    console.log();
                    return elem;
                }
            } else {
                return elem;
            }
        })
        .filter(elem => elem !== undefined)
        .map((elem, index) => {
            if (index%5 === 0) {
                console.log();
            }
            process.stdout.write(`${elem.toString()} `);
        });
    console.log();
}

printPattern(5);