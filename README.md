# In-memory storage for Rosmaro
This is an in-memory storage for Rosmaro. It's useful in situation where a Rosmaro model is used by only one process (like development environments or the browser).
## Installation
```
$ npm i rosmaro-in-memory-storage --save
```
## Building a storage

```js
const make_storage = require('rosmaro-in-memory-storage')
const storage = make_storage()
```
