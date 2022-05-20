```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![screenshot](./screenshot.jpg) 
-->

2. Answer the following with reason:

- `user == newUser;` // true because the both have same values stored in them
- `user === newUser;`// true because the both have same values stored in them and same string
- `user.name === newUser.name;`// true because the both have same values stored in them and same string
- `user.name == newUser.name;`// true because the both have same values stored in them
- `user.sibling == newUser.sibling;`// true because the both have same address & values stored in them
- `user.sibling === newUser.sibling;`// true because the both have same address & values stored in them and same string
- `user.sibling == allBrothers;` // false because there address won't match as allbrothers is not assigned from any object it is new array whose address cant be same 
- `user.sibling === allBrothers;`// false because there address won't match as allbrothers is not assigned from any object it is new array whose address cant be same also string wont match
- `brothersCopy === allBrothers;`// false because there address won't match as allbrothers is not assigned from any object it is new array whose address cant be same and also dont have same string
- `brothersCopy == allBrothers;`// false because there address won't match as allbrothers is not assigned from any object it is new array whose address cant be same 
- `brothersCopy == user.sibling;`// true because the both have same address so they have same values stored in them
- `brothersCopy === user.sibling;`// true because the both have same address so they have same values stored in them and there string also matches completely
- `brothersCopy[0] === user.sibling[0];`// true because the both have same address so they have same values stored in them and there string also matches completely
- `brothersCopy[1] === user.sibling[1];`// true because the both have same address so they have same values stored in them and there string also matches completely
- `user.sibling[1] === newUser.sibling[1];`// true because the both have same address so they have same values stored in them and there string also matches completely