
// Problem: Create Hello World Function
// Link: https://leetcode.com/problems/create-hello-world-function/
// Difficulty: Easy

// Description:
// Write a function `createHelloWorld` that returns a new function.
// The returned function should always return "Hello World",
// regardless of the input arguments passed to it. :contentReference[oaicite:0]{index=0}

// Approach:
// - This is a higher-order function (a function returning another function).
// - The inner function ignores all arguments.
// - It always returns the constant string "Hello World".
// - Uses closure concept in JavaScript.

// Time Complexity: O(1)
// Space Complexity: O(1)

var createHelloWorld = function(arg) {
    
    return function() {
        return "Hello World";
    }
};

