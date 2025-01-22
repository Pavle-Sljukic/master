package com.pluralsight.calcengine;

public enum MathOperation {
    ADD('+'),
    DIVIDE('/'),
    MULTIPLY('*'),
    SUBTRACT('-');

    private char symbol;

    public char getSymbol() {
        return symbol;
    }

    MathOperation(char symbol) {
        this.symbol = symbol;
    }
}
