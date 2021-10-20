function isTriangle(a, b, c) {
    const max = Math.max(a, b, c);
    const perim = a + b + c;
    if (perim <= 0) return false;
    if (perim - max > max) return true;
    return false;
}