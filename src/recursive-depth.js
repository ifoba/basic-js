module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        }
        let depth = 0;
        arr.forEach(el => {
            depth = Math.max(this.calculateDepth(el), depth);
        });
        return depth + 1;
    }
};