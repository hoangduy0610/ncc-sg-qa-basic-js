# Buổi 2

## Mảng
![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/10451d38-93a8-421a-8369-a735e8794752)

### Sơ khai
- Mảng là 1 cấu trúc dữ liệu gồm các ô nhớ tổ chức liền kề nhau (như hình minh họa bên trên).
- Mỗi 1 ô ta gọi là 1 phần tử. Các ô được đánh chỉ số (địa chỉ, index) bằng các con số tăng dần bắt đầu từ 0.
- Có thể truy cập đến 1 ô để lấy giá trị ra từ ô hoặc lưu một giá trị vào ô bằng cú pháp: `tên_mảng[chỉ_số]`. Ví dụ: console.log(so_dem[10]) -> In ra phần tử tại ô có index là 10 (phần tử thứ 11).
- (QUAN TRỌNG) Về bản chất, mỗi 1 ô trong mảng cũng giống như 1 biến. Nghĩa là ta vẫn có thể thao tác cộng trừ nhân chia.... như với biến nguyên thủy

### Các thao tác trên mảng
![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/ccb2bc92-5142-4ccc-b837-bac10530c78a)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/5a068404-82fd-4f7f-a868-ed905431e351)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/f261379d-5505-410f-9452-8ad2c1328a57)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/92e22bae-a38b-4bd6-bae6-35fcf713d20b)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/95bcd6ca-c900-43d5-8b43-90d93a877450)


## Vòng lặp
### for (...)
- Dùng để lặp với số lần biết trước.

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/50ceefaf-852d-4c84-8739-4121d9f9ce82)

- Dùng vòng lặp for để duyệt mảng (từ đầu -> cuối mảng)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/ef877de1-5e8e-4f80-9968-dbcfd3cc830f)

- Dùng vòng for để duyệt NGƯỢC mảng (từ cuối -> đầu mảng)

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/689b8a90-9ed0-4170-88d6-4bd00da2c25e)

### while (...)
- Dùng để lặp với số lần chưa biết trước.

![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/3be05f27-e46f-4e4a-8d87-7c01d42b975e)


## Một số kĩ thuật với vòng lặp
### Kĩ thuật đặt lính canh
```
Ứng dụng: Tìm phần tử lớn nhất/nhỏ nhất trong mảng.
Ý tưởng:
- Chọn phần tử đầu tiên (index = 0) làm LÍNH CANH (CHỐT) (mặc định nó là lớn nhất/bé nhất).
- Duyệt mảng từ phần tử thứ 2 (index = 1) cho tới hết mảng, nếu có bất kì phần tử nào lớn hơn/bé hơn phần tử làm CHỐT thì thay thế nó.
- Kết thúc vòng lặp, trả ra được kết quả.
```

**Ví dụ**

*Đề bài: Tìm phần tử lớn nhất trong mảng arr=[0,10,100,1000,10000,100000]*

```javascript
var arr = [0, 10, 100, 1000, 10000, 100000];    // Khởi tạo mảng
var max = arr[0];                               // Biến max đóng vai trò là LÍNH CANH (CHỐT), giá trị ban đầu là arr[0] (phần tử đầu tiên)
for (var i = 1; i < arr.length; i++) {          // Lặp từ i = 1 -> tới hết mảng
    if (arr[i] > max) {                         // Nếu có phần tử nào đó trong mảng arr lớn hơn LÍNH CANH thì cập nhật lại giá trị
        max = arr[i];
    }
}

console.log(max);
```

### Kĩ thuật biến nhớ (cờ hiệu)
```
Ứng dụng: Kiểm tra xem các phần tử trong mảng có thỏa mãn 1 điều kiện nào đó không
Ý tưởng:
- Tạo 1 biến cờ hiệu (kiểu bool). Giá trị khởi tạo là hạ cờ (nghĩa là mặc định bài toán đúng/sai).
- Duyệt mảng, kiểm tra điều kiện (kiểm tra xem có phần tử nào làm cho bài toán trở nên sai/đúng không).
- Thay đổi giá trị cờ hiệu nếu cần.
```

**Ví dụ**

*Đề bài 1: Xác định xem mảng alpha=[2,4,6,8,3] CÓ CHỨA BẤT KÌ SỐ LẺ nào hay không?*
```javascript
var alpha = [2, 4, 6, 8, 3];
var flag = false;                          // Cờ hiệu mặc định sai (không có bất kì số lẻ nào)
for (var i = 0; i < alpha.length; i++) {
    if (alpha[i]%2 != 0) {                 // Nếu alpha[i] là số lẻ (i chia lấy dư (%) cho 2, nếu có số dư khác 0 là số lẻ)
        flag = true;                       // Đổi cờ hiệu
        break;                             // Thoát vòng lặp (không lặp tiếp nữa)
    }
}

console.log(flag);         // true
```

*Đề bài 2: Xác định xem mảng beta=[2,4,6,8,10] có phải TẤT CẢ phần tử TĂNG DẦN hay không?*
```javascript
var beta = [2, 4, 6, 8, 3];
var flag = true;                          // Cờ hiệu mặc định đúng (tất cả phần tử tăng dần)
for (var i = 0; i < beta.length; i++) {
    if (beta[i] < beta[i-1]) {            // Nếu beta[i] bé hơn phần tử đứng liền trước nó
        flag = false;                     // Đổi cờ hiệu
        break;                            // Thoát vòng lặp (không lặp tiếp nữa)
    }
}

console.log(flag);         // true
```

Bạn có thể chọn bất kì cách nào trong 2 cách trên (cờ hiệu mặc định đúng hoặc cờ hiệu mặc định sai). 

### Kĩ thuật đếm
Chỉ đơn giản là duyệt mảng và dùng if để kiểm tra điều kiện C cho trước, nếu thỏa mãn thì tăng giá trị biến đếm.

```javascript
// Đề bài: Đếm số lượng số nguyên âm có trong mảng sau
var arr = [1, -10, 100, -23, 0, 11, 99999];

// Bài giải:
var dem = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        dem++;
    }
}
console.log(dem);
```

### Kĩ thuật tính tổng, tích
Tạo 1 biến lưu giá trị tổng, tích và tính cộng dồn qua các phần tử

```javascript
// Đề bài: Tính tổng các phần tử của mảng sau
var arr = [1, -10, 100, -23, 0, 11, 99999];

// Bài giải:
var tong = 0;
for (var i = 0; i < arr.length; i++) {
    tong = tong + arr[i];
}
console.log(tong);
```

```javascript
// Đề bài: Tính tích các phần tử của mảng sau
var arr = [1, -10, 100, -23, 0, 11, 99999];

// Bài giải:
// Lưu ý: Tính tích thì giá trị khởi tạo là 1, vì nếu đặt là 0 thì kết quả cuối cùng luôn là 0 (Do 0 nhân với bất kì số nào đều là 0)
var tich = 1;
for (var i = 0; i < arr.length; i++) {
    tich = tich * arr[i];
}
console.log(tich);
```

## Ghi chú buổi học
![image](https://github.com/hoangduy0610/ncc-sg-qa-basic-js/assets/45957687/fdc1bc57-7343-4420-91b4-d2c403c2e786)

### Danh sách bài tập:
1. Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 2 + 3 + ... + n
2. Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
3. Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 4 + 9 + 16 + 25 +  ... + n^2
4. Dùng vòng lặp for, tính tổng của dãy sau: S(n) = 1 + 8 + 27 + ... + n^3
5. Dùng vòng lặp while, in ra tất cả số nguyên dương lẻ < 100
6. Dùng vòng lặp while, in ra tất cả số nguyên dương chẵn < 100
7. Dùng vòng lặp while, in ra tất cả số nguyên âm lẻ > -100
8. Dùng vòng lặp while, in ra tất cả số nguyên âm chẵn > -100
9. Viết chương trình in ra hình chữ nhật có cạnh a, b
Ví dụ:
```
a = 3, b = 5
* * * * *
* * * * *
* * * * *
```
10. Viết chương trình in ra tam giác cân có chiều cao = h.
Ví dụ:
```
h = 3
  *
 * *
* * *
```
11. Đếm số lượng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
12. Đếm số lượng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
13. Đếm số lượng các số chẵn trong mảng arr = [10, 11, 12, 13, 14, 15]
14. Đếm số lượng các số lẻ trong mảng arr = [10, 11, 12, 13, 14, 15]
15. Tìm số lớn nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
16. Tìm số bé nhất trong mảng arr = [10, 11, 12, 13, 14, 15]
17. Tính tổng các số âm trong mảng arr = [10, 11, 12, -10, -11, -12]
18. Tính tổng các số dương trong mảng arr = [10, 11, 12, -10, -11, -12]
19. Tìm số chẵn đầu tiên trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
20. Tìm số chẵn cuối cùng trong mảng arr = [10, 11, 12, 13, 14, 15] và arr2 = [1, 3, 5, 7, 9]. Nếu không tìm được số chẵn nào thì in ra -1
