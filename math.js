(function(global) {
    global.processPythonFile = function(pythonCode) {
        // Regular expressions to match num1 and num2 assignments
        const num1Regex = /num1\s*=\s*([\d\.]+)/;
        const num2Regex = /num2\s*=\s*([\d\.]+)/;

        // Try to match num1 and num2 in the Python code
        const num1Match = pythonCode.match(num1Regex);
        const num2Match = pythonCode.match(num2Regex);

        if (num1Match && num2Match) {
            // Extract the numbers
            const num1 = parseFloat(num1Match[1]);
            const num2 = parseFloat(num2Match[1]);

            // Perform the addition and return the result
            return num1 + num2;
        } else {
            // Return an error message if num1 or num2 are not found
            return "Error: Could not find num1 or num2 in the Python code.";
        }
    };
})(window);
