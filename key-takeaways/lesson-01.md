## Playwright

# Ưu điểm
- Cross browser: hỗ trợ các trình duyệt phổ biến: Chrome, Edge, Firefox, Safari & 143 phiên bản trình duyệt
- Cross platform: 1 code chạy trên nhiều hệ điều hành
- auto waiting, auto-retry assertion giảm flaky tests
- Có report mặc định
- Code gen: thao tác để sinh ra code

# Giải thích công cụ
- nvm: Node version manager. NodeJS là công cụ để chạy code
- git: quản lý source code
- Github: chia sẻ code, làm việc nhóm

# Cài đặt Playwright
1. Tạo thư mục tổng của dự án
2. Mở thử vục trong ide
3. Mở terminal và chạy lệnh init
npm init playwright@latest
Liên tục gõ enter cho đến khi xong
4. Đưa code lên github
- Khởi tạo local repo: git init
- Tạo repo trên Github và remote: git remote add origin url
- Thêm file vào stating: git add .
- git commit -m"init"
- git push origin main

Lưu ý: Nếu máy có nhiều hơn 1 git account thì lúc remote nhớ chỉnh lại ssh key theo địa chỉ đã config


## GIT

# Cấu hình git
git config --global user.name "tên git"
git config --global user.email "địa chỉ email"
git config --global init.defaultBranch main

Có thể bỏ --global nếu chỉ muốn config trong phạm vi folder dự án hiện tại

# Kết nối github
Sử dụng ssh key, có 2 loại ssh key là:
- Private key: id_rsa
- Public key: id_rsa.hub

1. Lệnh tạo SSH Keys:
ssh-keygen- t rsa -b 4096 -C "địa chỉ email"

2. Lấy nội dung ssh key: 
cat ~/.ssh/id_rsa.pub
- Truy cập vào đh/new trên github để thêm ssh key


