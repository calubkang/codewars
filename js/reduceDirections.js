function dirReduc(plan) {
    let opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
    };
    return plan.reduce(function (list, dir) {
        if (list[list.length - 1] === opposite[dir])
            list.pop();
        else
            list.push(dir);
        return list;
    }, []);
}

// my first try

function dirReduc(arr) {
    const opp = {
        "NORTH": "SOUTH",
        "WEST": "EAST",
        "SOUTH": "NORTH",
        "EAST": "WEST"
    }
    for (let i = 0; i < arr.length; i++) {
        if (opp[arr[i]] === arr[i + 1]) {
            arr.splice(i, 2);
            i--
        } else if (opp[arr[i]] === arr[i - 1]) {
            arr.splice(i - 1, 2);
            i--
        }
    }
    return arr
}  