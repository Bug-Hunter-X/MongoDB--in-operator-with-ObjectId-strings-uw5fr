# MongoDB $in operator with ObjectId strings
This example demonstrates a common error when using the `$in` operator with ObjectId values in MongoDB queries. The error is using strings instead of ObjectId objects. 

## Bug
The `bug.js` file contains code that attempts to query documents using the `$in` operator with an array of ObjectId strings. This will not correctly match documents because MongoDB's internal ObjectId representation is different than the hex string representation used to display the ObjectId.

## Solution
The `bugSolution.js` file provides the corrected query, using the `ObjectId` constructor to create ObjectId objects from the hex strings, which allows MongoDB to properly match the documents based on their internal ObjectId values.

## How to Reproduce

1.  Ensure a MongoDB instance is running and accessible.
2.  Create a MongoDB collection.
3.  Insert documents into the collection with different ObjectId values.
4.  Run the incorrect query from `bug.js` and verify it returns no results or incorrect results.
5.  Run the corrected query from `bugSolution.js` and verify it returns the expected results.