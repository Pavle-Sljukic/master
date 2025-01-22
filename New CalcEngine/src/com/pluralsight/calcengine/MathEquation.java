package com.pluralsight.calcengine;

public class MathEquation {
private double leftVal,rightVal, result;
public MathOperation opCode;

private static int numberOfCalculations;
private static double sumOfResults;

public MathEquation() {}

public MathEquation(MathOperation opCode) {
    this.opCode = opCode;
}

public MathEquation(double leftVal, double rightVal, MathOperation opCode) {
    this(opCode);
    this.leftVal = leftVal;
    this.rightVal = rightVal;
}

    public void execute() {
            switch (opCode) {
                case ADD -> result = leftVal + rightVal;
                case SUBTRACT -> result = leftVal - rightVal;
                case MULTIPLY -> result = leftVal * rightVal;
                case DIVIDE -> result = rightVal != 0.0d ? leftVal / rightVal : 0.0d;
                default -> {
                    System.out.println("Error");
                    result = 0.0d;
                }
            }
            numberOfCalculations++;
            sumOfResults += result;
        }

    public void execute(double leftVal, double rightVal) {
    this.leftVal = leftVal;
    this.rightVal = rightVal;
    execute();
    }

    @Override
    public String toString() {
        char symbol = opCode.getSymbol();
        String builder = leftVal +
                " " +
                symbol +
                " " +
                rightVal +
                " = " +
                result;
        return builder;
    }

    public static double getAverageResult() {
            return sumOfResults / numberOfCalculations;
        }

    public double getResult() {
        return result;
    }

    public double getLeftVal() {
        return leftVal;
    }

    public void setLeftVal(double leftVal) {
        this.leftVal = leftVal;
    }

    public double getRightVal() {
        return rightVal;
    }

    public void setRightVal(double rightVal) {
        this.rightVal = rightVal;
    }

    public MathOperation getOpCode() {
        return opCode;
    }

    public void setOpCode(MathOperation opCode) {
        this.opCode = opCode;
    }
}

