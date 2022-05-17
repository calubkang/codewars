function findArea(points) {
    let length, triHeight, rectHeight;
    return points.reduce((area, p, i, arr) => {
        if (i < arr.length - 1) {
            length = Math.abs(p.X - arr[i + 1].X);
            triHeight = Math.abs(p.Y - arr[i + 1].Y);
            rectHeight = Math.min(p.Y, arr[i + 1].Y);
            return area + length * triHeight / 2 + length * rectHeight
        } else {
            return area + 0
        }
    }, 0)
}