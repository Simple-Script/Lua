(function(global) {
    // This function will search for h1 tags and perform the addition.
    global.processNumbersInH1 = function() {
        // Find all h1 elements on the page
        const h1Elements = document.querySelectorAll('h1');
        
        // Loop through all h1 elements
        h1Elements.forEach(function(h1) {
            // Get the text content of the h1 element
            const textContent = h1.textContent || h1.innerText;
            
            // Use regular expressions to find num1 and num2
            const num1Match = textContent.match(/num1\s*=\s*([\d\.]+)/);
            const num2Match = textContent.match(/num2\s*=\s*([\d\.]+)/);

            if (num1Match && num2Match) {
                // Extract the numbers from the matches
                const num1 = parseFloat(num1Match[1]);
                const num2 = parseFloat(num2Match[1]);

                // Perform the addition
                const sum = num1 + num2;

                // Output the result
                console.log(`Result of num1 + num2: ${sum}`);
                
                // Optionally, you can update the page with the result
                const resultElement = document.createElement('h2');
                resultElement.textContent = `The sum of num1 and num2 is: ${sum}`;
                h1.parentNode.insertBefore(resultElement, h1.nextSibling);
            }
        });
    };
})(window);
