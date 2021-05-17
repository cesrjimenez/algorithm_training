function rgb(string) {
    // YOUR WORK HERE
    let map = {
        r: 0,
        g: 0,
        b: 0
    };
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        const s = string[i];
        map[s]++;

        if (map.r >= 1 && map.g >= 1 && map.b >= 1) {
            count++;
            map.r--;
            map.g--;
            map.b--;
        }
    }

    return count;
}

console.log(rgb('rgbrgb'));
console.log(rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg'))
console.log(rgb('bbrr'));
