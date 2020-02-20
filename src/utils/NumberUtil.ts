export class NumberUtil {
    /**
     * 
     * @param min 
     * @param max 
     * @returns number in [min, max)
     */
    public static getRandomNumber(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * Get random number by number of number
     * @param non Number
     * @returns getNumberOf(9) will be random of [100000000, 999999999)
     */
    public static getNumberOf(non: number): number {
        let min = Math.pow(10, non - 1);
        let max = Math.pow(10, non) -1;
        return NumberUtil.getRandomNumber(min, max);
    }
}