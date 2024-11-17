export default function two_crystal_balls(breaks: boolean[]): number {
    let jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = 0;
    for (; i < breaks.length; i += jmpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // we now need to check from the point we've found the breakage backwards
    i = i - jmpAmount;

    for (let j = 0; j < jmpAmount && i < breaks.length; i++, j++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
