public class ForecastUtil {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double amount, double growthRate, int years) {
        if (years == 0) return amount; // base case
        return calculateFutureValue(amount * (1 + growthRate), growthRate, years - 1);
    }

    // Optimized version using memoization
    public static double[] memo;

    public static double calculateFutureValueMemo(double amount, double rate, int years) {
        memo = new double[years + 1];
        for (int i = 0; i <= years; i++) memo[i] = -1;
        return helper(amount, rate, years);
    }

    private static double helper(double amount, double rate, int year) {
        if (year == 0) return amount;
        if (memo[year] != -1) return memo[year];
        memo[year] = helper(amount, rate, year - 1) * (1 + rate);
        return memo[year];
    }
}
