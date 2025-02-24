const display = document.getElementById("display");

        function appendToDisplay(input) {
            if (/[+\-*/.]{2,}/.test(display.value + input)) return; 
            display.value += input;
        }

        function clearDisplay() {
            display.value = "";
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = new Function("return " + display.value)();
            } catch (error) {
                display.value = "Error";
            }
        }

        document.addEventListener("keydown", (event) => {
            const key = event.key;
            if (/[0-9+\-*/.=]/.test(key)) {
                if (key === "=") calculate();
                else appendToDisplay(key);
            } else if (key === "Backspace") {
                deleteLast();
            } else if (key === "Enter") {
                calculate();
            } else if (key === "Escape") {
                clearDisplay();
            }
        });