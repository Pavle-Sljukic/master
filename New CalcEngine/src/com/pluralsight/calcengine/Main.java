package com.pluralsight.calcengine;

public class Main {

    public static void main(String[] args) {
        double[] leftVals = {100.0d, 20.0d, 50.0d, 15.0d};
        double[] rightVals = {100.0d, 20.0d, 50.0d, 15.0d};
        char[] opCodes = {'d', 'a', 'm', 's'};
        double[] results = new double[opCodes.length];

        for (int i = 0; i < opCodes.length; i++) {
            switch (opCodes[i]) {
                case 'a':
                    results[i] = leftVals[i] + rightVals[i];
                    break;
                case 's':
                    results[i] = leftVals[i] - rightVals[i];
                    break;
                case 'm':
                    results[i] = leftVals[i] * rightVals[i];
                    break;
                case 'd':
                    results[i] = rightVals[i] != 0.0d ? leftVals[i] / rightVals[i] : 0.0d;
                    break;
            }
        }

        for (double result : results){
            System.out.println(result);
        }
    }
}
