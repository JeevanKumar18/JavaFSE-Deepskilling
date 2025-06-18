public class TestForecast {
    public static void main(String[] args) {
        double currentValue = 1000.0;
        double growthRate = 0.10; // 10% per year

        System.out.printf("Current Value: Rs.%.2f%n", currentValue);

        // Forecasting for 5, 6, and 7 years
        for (int years = 5; years <= 7; years++) {
            double forecast = ForecastUtil.calculateFutureValueMemo(currentValue, growthRate, years);
            System.out.printf("Future Value after %d years: Rs.%.2f%n", years, forecast);
        }
    }
}
