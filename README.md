# Drone Navigation Problems

In this repository is a function complexRoute() which allows the endpoint of travel to be found after a drone has followed a set path on a grid.

complexRoute() takes input in the form of a string such as "S- L- S- L+ R--+ W+ L+-+- N+" and will output an array with the end coordinates [1,2].

- The drone starts facing north at position [0,0]
- The L and R rotate the drone and the +'s and -'s show how far forwards or backwards it will move after.
- Cardinal direction (N,E,S,W) can be used similar to rotating but the drone remains facing the same way after moving.

## Running locally

To run this file locally you will need to clone the file and navigate into it, then install the dependencies by typing `npm install` into your console.

## Testing

I tested using Jest which can be run by typing `npm test` in your console.

*Made by Tommy Luff :D*
