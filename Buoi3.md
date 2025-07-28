# Bài học

## ✅ 1. Function & Arrow Function

### 🔹 Hàm (Function)
Hàm là một khối mã có thể tái sử dụng để thực hiện một nhiệm vụ cụ thể. Hàm giúp tổ chức code rõ ràng, dễ bảo trì và kiểm thử.

**Cú pháp:**
```js
function tenHam(thamSo1, thamSo2) {
  // logic xử lý
  return giaTri;
}
```

**Ví dụ:**
```js
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5
```

### 🔹 Arrow Function
Arrow function là cách viết rút gọn của function trong ES6. Nó thường được dùng khi viết hàm ngắn, hoặc trong callback.

**Cú pháp:**
```js
const tenHam = (thamSo) => {
  // logic xử lý
}
```

**Ví dụ rút gọn:**
```js
const sum = (a, b) => a + b;
```

## ✅ 2. Mảng (Array)

Mảng là kiểu dữ liệu cho phép lưu trữ nhiều giá trị trong một biến.

```js
const numbers = [1, 2, 3, 4, 5];
```

### 🔹 Duyệt mảng bằng `for`
```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

### 🔹 forEach
Thực hiện hành động với từng phần tử trong mảng, không trả về kết quả.
```js
numbers.forEach((num) => {
  console.log(num);
});
```

### 🔹 map
Tạo ra mảng mới sau khi biến đổi từng phần tử.
```js
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
```

### 🔹 filter
Lọc các phần tử thỏa điều kiện.
```js
const even = numbers.filter(num => num % 2 === 0); // [2, 4]
```

### 🔹 reduce
Tổng hợp (reduce) các phần tử thành một giá trị.
```js
const sum = numbers.reduce((acc, num) => acc + num, 0); // 15
```

## ✅ 3. Đối tượng (Object)

Object là kiểu dữ liệu lưu trữ theo cặp key-value, rất phổ biến khi thao tác dữ liệu dạng cấu trúc.

```js
const user = {
  name: "Alice",
  age: 25
};
```

### 🔹 Truy cập thuộc tính
```js
console.log(user.name);       // Alice
console.log(user['age']);     // 25
```

### 🔹 Object lồng nhau
```js
const person = {
  name: "Bob",
  address: {
    city: "Hanoi",
    zip: "10000"
  }
};
console.log(person.address.city); // Hanoi
```

### 🔹 Duyệt mảng các object
```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 }
];

const adults = users.filter(u => u.age > 18);
```

## ✅ 4. Callback & setTimeout

### 🔹 Callback là gì?
Là một hàm được truyền vào hàm khác dưới dạng đối số và được gọi sau khi hành động nào đó hoàn tất.

**Ví dụ:**
```js
function greet(name, callback) {
  console.log("Xin chào " + name);
  callback();
}

greet("Nam", () => {
  console.log("Hoàn tất lời chào");
});
```

### 🔹 setTimeout
Giúp delay đoạn code một thời gian nhất định (ms).

**Ví dụ:**
```js
setTimeout(() => {
  console.log("In ra sau 2 giây");
}, 2000);
```

## ✅ 5. Promise – then/catch

### 🔹 Promise là gì?
Promise là một đối tượng đại diện cho kết quả (thành công hoặc thất bại) của một thao tác bất đồng bộ.

**Cú pháp tạo Promise:**
```js
const promise = new Promise((resolve, reject) => {
  if (thanhCong) {
    resolve("Thành công");
  } else {
    reject("Thất bại");
  }
});
```

### 🔹 then / catch
- `then()` dùng để xử lý khi thành công
- `catch()` dùng để bắt lỗi khi thất bại

```js
promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## ✅ 6. async / await

Là cú pháp mới giúp viết code bất đồng bộ rõ ràng, dễ đọc hơn Promise thuần.

**Cú pháp:**
```js
async function myFunction() {
  const result = await somePromiseFunction();
  console.log(result);
}
```

**Ví dụ:**
```js
function fakeApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dữ liệu đã về");
    }, 2000);
  });
}

async function getData() {
  const data = await fakeApi();
  console.log(data);
}

getData();
```

📝 **Ghi nhớ:**
- `await` chỉ dùng được trong `async function`.

# Bài tập

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
