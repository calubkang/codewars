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