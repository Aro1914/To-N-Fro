# To-N-Fro

Made in boredom, find a use case for yourself...

## Function

The project serves just a single function, simulates a looping call to the contract, through what _I'd like_ to call **consensus recursion**.  

## How it works

This is implemented by having a participant repeatedly make API calls to the contract by assigning a function to the interact interface that has a call to an API function, which in turn has a call to the interact function in its consensus block.

> It is important to note that like all recursive functions, there must be an initial call to the API function, to trigger the recursive calls.
