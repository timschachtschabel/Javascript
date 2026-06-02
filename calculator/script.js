
class Calculator {

    constructor() {
        this.displayScreen = document.getElementById("display");

        this.currentValue = "";
        this.previousValue = "";

        this.operator = null;
        this.resultCalculated = false;
    }

    add(number1, number2) {
        return number1 + number2;
    }

    subtract(number1, number2) {
        return number1 - number2;
    }

    multiply(number1, number2) {
        return number1 * number2;
    }

    divide(number1, number2) {
        return number1 / number2;
    }

    operate(operator, number1, number2) {
        if (operator === "+") {
            return this.add(number1, number2);
        }
        else if(operator === "-") {
            return this.subtract(number1, number2);
        }
        else if(operator === "*") {
            return this.multiply(number1, number2);
        }
        else if(operator === "/") {
            return this.divide(number1, number2);
        }
    }

     chooseOperator(operator) {
        if (!this.currentValue && this.previousValue) {
            this.operator = operator;
            return;
        }

        if(this.previousValue && this.currentValue) {
            this.calculate();
        }
        
        this.operator = operator;
        this.previousValue = this.currentValue;
        this.currentValue = "";
        this.resultCalculated = false;

    }

    updateDisplay() {
        this.displayScreen.textContent = this.currentValue || "0";
    }

    appendNumber(number) {
        if (number === "." && this.currentValue.includes(".")) return;

        if (this.resultCalculated) {
            this.currentValue = "";
            this.previousValue = "";
            this.operator = null;
            this.resultCalculated = false;
        }

        this.currentValue += number;
        this.updateDisplay();
    }

    clear() {
        this.currentValue = "";
        this.previousValue = "";
        this.operator = null;
        this.updateDisplay();   
    }

    calculate() {
        const a = parseFloat(this.previousValue);
        const b = parseFloat(this.currentValue);

        if (isNaN(a) || isNaN(b)) return;

        const result = this.operate(this.operator, a, b);

        this.currentValue = result;
        this.operator = null;
        this.previousValue = "";
        this.resultCalculated = true;
        this.updateDisplay();
    }
}

let calc = new Calculator();

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        calc.appendNumber(button.dataset.number);
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        calc.chooseOperator(button.dataset.operator);
    });
});

document.getElementById("clear").addEventListener('click', () => {
    calc.clear();
});

document.getElementById("equals").addEventListener("click", () => {
    calc.calculate();
});



