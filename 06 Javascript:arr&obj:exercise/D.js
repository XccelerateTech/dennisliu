var marks = [{ mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 }, { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }];

const average = (mark) => {
    var num = mark.map(a => {
        return a.mark;
    })

    var sum = num.reduce((a, b) => {
        return a + b
    })
    console.log(sum/Number(num.length))
};

average(marks)


