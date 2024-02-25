# Buổi 3

## Cài đặt Git-SCM
https://git-scm.com/

## Đăng kí tài khoản Github
https://github.com/

## Tạo Repository
1. Truy cập vào My Repositores
2. Bấm nút New

## Các câu lệnh

### Khi cài đặt lần đầu
```bash
git config --global user.email "<Email dùng để dky github>"
git config --global user.name "<Username github>"
```

### Clone repository (1 Repository có sẵn code)
```bash
git clone <Link repository>
```

### Push code lên 1 repository (Mới tạo ở bước TẠO REPOSITORY ở trên, chưa có code gì)
0. Thêm remote origin
```bash
git remote add origin <link git repository>
```
1. Khởi tạo Repository ở máy tính
```bash
git init
```
2. Thêm file vào staged area (Khu vực sẽ được commit)

- Add tất cả file
```bash
git add .
```
- Add 1 file nào đó cụ thể
```bash
git add <tên file>
```

3. Commit file (Lưu staged file vào repository ở máy tính)
```bash
git commit -m "Nội dung ghi chú"
```

4. Đẩy code lên github. (Đồng bộ repository dưới máy lên cloud)
```bash
git push -u origin master
```

### Push code lên 1 repository (Mới được clone về hoặc đã push trước đó)
Chúng ta sẽ làm tương tự bên trên, nhưng bỏ qua 2 thao tác đầu tiên:
1. Thêm file vào staged area (Khu vực sẽ được commit)

- Add tất cả file
```bash
git add .
```
- Add 1 file nào đó cụ thể
```bash
git add <tên file>
```

2. Commit file (Lưu staged file vào repository ở máy tính)
```bash
git commit -m "Nội dung ghi chú"
```

3. Đẩy code lên github. (Đồng bộ repository dưới máy lên cloud).
```bash
git push
```

### Pull (Kéo code từ repository trên cloud về máy)
```bash
git pull
```