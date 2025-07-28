## 📦 1. Viết Hàm (Function & Arrow Function)

### Bài 1
Viết function truyền vào 2 số, trả về tổng.
```js
function sum(a, b) {
  // TODO
}
```

### Bài 2  
Viết arrow function kiểm tra xem số truyền vào có phải là số chẵn không.
```js
const isEven = (num) => {
  // TODO
}
```

### Bài 3  
Viết function truyền vào một chuỗi, trả về chuỗi viết hoa toàn bộ.
```js
function toUpperCase(str) {
  // TODO
}
```

### Bài 4  
Viết arrow function đảo ngược một chuỗi.
```js
const reverseString = (str) => {
  // TODO
}
```

### Bài 5  
Viết function truyền vào số giây, in ra `"Đã hết thời gian"` sau số giây đó.
```js
function countdown(seconds) {
  // TODO: dùng setTimeout
}
```

## 📑 2. Mảng (Array)

### Bài 6  
Viết function nhận vào một mảng số, dùng `for` để in ra từng số.
```js
function printNumbers(arr) {
  // TODO
}
```

### Bài 7  
Dùng `forEach` để tính tổng các số trong mảng `[1, 2, 3, 4, 5]`.
```js
const arr = [1, 2, 3, 4, 5];
// TODO
```

### Bài 8  
Dùng `map` để nhân đôi mỗi phần tử trong mảng `[1, 2, 3]` → `[2, 4, 6]`.
```js
const numbers = [1, 2, 3];
// TODO
```

### Bài 9  
Dùng `filter` để lọc ra các số chẵn từ mảng `[1, 2, 3, 4, 5, 6]`.
```js
const data = [1, 2, 3, 4, 5, 6];
// TODO
```

### Bài 10  
Dùng `reduce` để tính tổng các phần tử trong mảng `[1, 2, 3, 4]`.
```js
const nums = [1, 2, 3, 4];
// TODO
```

## 📦 3. Đối tượng (Object)

### Bài 11  
Tạo object đại diện cho người dùng `{ name: 'Alice', age: 25 }`, viết hàm in ra tên người đó.
```js
const user = {
  name: 'Alice',
  age: 25
};

function printName(user) {
  // TODO
}
```

### Bài 12  
Viết function truyền vào object user, trả về tuổi + 1.
```js
function nextYearAge(user) {
  // TODO
}
```

### Bài 13  
Tạo object lồng nhau và in ra `city`:
```js
const person = {
  name: 'Bob',
  address: {
    city: 'Hanoi',
    zip: '10000'
  }
};

// TODO: In ra city
```

### Bài 14  
Viết function kiểm tra object có chứa key `"email"` hay không.
```js
function hasEmail(obj) {
  // TODO
}
```

### Bài 15  
Tạo một array các object user, lọc ra những user có tuổi > 18.
```js
const users = [
  { name: 'A', age: 20 },
  { name: 'B', age: 16 },
  { name: 'C', age: 25 }
];

// TODO
```

## 🔄 4. Bất đồng bộ: Callback, Promise, Async/Await

### Bài 16 – Callback  
Viết hàm `greet(name, callback)` để in `Xin chào <name>` rồi gọi callback:
```js
function greet(name, callback) {
  // TODO
}

greet("Nam", () => {
  console.log("Đã gọi xong greet!");
});
```

### Bài 17 – Callback với setTimeout  
Giả lập API delay:
```js
function fakeApi(callback) {
  setTimeout(() => {
    callback("Dữ liệu từ server");
  }, 2000);
}

// TODO: Gọi và in kết quả
```

### Bài 18 – Promise  
Tạo `Promise` trả về `"Thành công!"` sau 2 giây, dùng `.then()` để in ra:
```js
const promise = new Promise((resolve, reject) => {
  // TODO
});

promise.then(result => {
  // TODO
});
```

### Bài 19 – Promise Rejected  
Viết một `Promise` bị reject, dùng `.catch()` để bắt lỗi và in thông báo.
```js
const errorPromise = new Promise((resolve, reject) => {
  // TODO
});

errorPromise.catch(error => {
  // TODO
});
```

### Bài 20 – Async/Await  
Viết hàm `async` gọi một Promise giả lập API:
```js
function fakeApiPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Kết quả từ server");
    }, 2000);
  });
}

async function getData() {
  // TODO: dùng await để lấy dữ liệu
}

getData();
```