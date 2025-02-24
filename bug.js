```javascript
// Incorrect usage of $in operator with an array of ObjectId
 db.collection.find({ _id: { $in: ["651a1a1a1a1a1a1a1a1a1a1a", "651b1b1b1b1b1b1b1b1b1b1b"] }})
```