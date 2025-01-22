package com.pluralsight.calcengine;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        if(args.length == 0 ) {
            performCalculations();
        } else if(args.length == 1 && args[0].equals("interactive")) {
            executeInteractively();
        } else if(args.length == 3) {
            performOperation(args);
        }
    }

    static void performCalculations() {
        MathEquation[] equations = new MathEquation[4];
        equations[0] = new MathEquation(100.0d, 50.0d, MathOperation.DIVIDE);
        equations[1] = new MathEquation(25.0d, 92.0d, MathOperation.ADD);
        equations[2] = new MathEquation(225.0d, 17.0d, MathOperation.SUBTRACT);
        equations[3] = new MathEquation(11.0d, 3.0d, MathOperation.MULTIPLY);

        for (MathEquation equation : equations) {
            equation.execute();
            System.out.println(equation);
        }
        System.out.println("Average result = " + MathEquation.getAverageResult());
    }

    static void executeInteractively() {
        System.out.println("Enter an operation and two numbers");
        Scanner scanner = new Scanner(System.in);
        String userInput = scanner.nextLine();
        String[] parts = userInput.split(" ");
        performOperation(parts);
    }

    private static void performOperation(String[] parts) {
        MathOperation opCode = MathOperation.valueOf(parts[0].toUpperCase());
        double leftVal = valueFromWord(parts[1]);
        double rightVal = valueFromWord(parts[2]);
        MathEquation equation = new MathEquation(leftVal,rightVal,opCode);
        equation.execute();
        System.out.println(equation);
    }

    static double valueFromWord(String word) {
        boolean isValueSet = false;
        double value = 0.0d;
        String[] words = {"zero", "one", "two", "three", "four",
                "five", "six", "seven", "eight", "nine"
        };

        for (int i = 0; i < words.length; i++) {
            if (word.equals(words[i])) {
                value = i;
                isValueSet = true;
                break;
            }
        }
        if(!isValueSet)
            value = Double.parseDouble(word);

        return value;
    }
}
