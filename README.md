# dnull

## Installation

```sh
npm install dnull
```

## Usage

```typescript
import { dnull } from "dnull";

const obj = {
  name: "john",
  address: {
    street: "john's street",
    number: null,
    tags: [1, 2, null, 4],
  },
};

typeof dnull(obj); // { name: "john", address: { street: "john's street", number: undefined, tags: [ 1, 2, undefined, 4 ] } }
```
