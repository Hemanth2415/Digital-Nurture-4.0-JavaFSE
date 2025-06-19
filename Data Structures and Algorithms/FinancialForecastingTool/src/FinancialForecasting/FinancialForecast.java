package FinancialForecasting;

public class FinancialForecast {

    public static double futureValueRecursive(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return (1 + rate) * futureValueRecursive(presentValue, rate, years - 1);
    }

    public static double futureValueMemo(double presentValue, double rate, int years, double[] memo) {
        if (years == 0) return presentValue;
        if (memo[years] != 0) return memo[years];

        memo[years] = (1 + rate) * futureValueMemo(presentValue, rate, years - 1, memo);
        return memo[years];
    }

    public static void main(String[] args) {
        double presentValue = 10000; 
        double annualRate = 0.08;     
        int years = 5;                

        double futureRecursive = futureValueRecursive(presentValue, annualRate, years);
        System.out.printf("Future Value (Recursive): ₹%.2f\n", futureRecursive);

        double[] memo = new double[years + 1];  // For caching results
        double futureMemo = futureValueMemo(presentValue, annualRate, years, memo);
        System.out.printf("Future Value (Memoized): ₹%.2f\n", futureMemo);
    }
}

