export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0,
        hi = haystack.length;
    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const val = haystack[mid];

        if (val === needle) {
            return true;
        } else if (needle > val) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    } while (lo < hi);

    return false;
}
