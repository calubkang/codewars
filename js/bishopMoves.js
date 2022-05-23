const bishop = (startPos, endPos, num_Moves) => {

    if (startPos === endPos)
        return true;

    let letters = 'abcdefgh';
    let lat = Math.abs(letters.indexOf(startPos[0]) - letters.indexOf(endPos[0]));
    let long = Math.abs(Number(startPos[1]) - Number(endPos[1]));

    if ((lat - long) % 2)
        return false;

    if (num_Moves === 1 && lat !== long)
        return false;

    if (num_Moves === 0 && (lat || long))
        return false

    return true
}