function recycle(array) {
    let materials = {
        paper: [],
        glass: [],
        organic: [],
        plastic: []
    }
    array.forEach(item => {
        if (materials[item.material]) {
            materials[item.material].push(item.type)
        }
        if (materials[item.secondMaterial]) {
            materials[item.secondMaterial].push(item.type)
        }
    })
    let res = [];
    for (let material in materials) {
        res.push(materials[material])
    }
    return res
}