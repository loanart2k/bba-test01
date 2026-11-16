## Javascript

# Phạm vi biến

Gồm 3 loại phạm vi

1. Block scope: khai báo trong cặp ngoặc {}
- var: không bị giới hạn trong phạm vi 
- let/ const: bị giới hạn trong phạm vi

2. Function:
- var/ let/ const: đều bị giới hạn trong hàm, nếu gọi ra ngoài sẽ bị undefined

3. Global:
- biến được khai báo tự do nên sẽ được sử dụng tự do

# Break and continue
- break: thoát khỏi vòng lặp ngay lập tức dù điều kiện đang đúng
- continue: bỏ qua vòng lặp hiện tại va tiếp tục lượt lặp tiếp theo

# Câu điều kiện nâng cao

1. Ternary operator: cách viết ngắn gọn cho if...else
let age = 20;
let status = (age >=18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

2. for...in Loop: duyệt các thuộc tính của 1 object
const person = {
    name: "Loan",
    age: 26,
    city: "Da Nang"
}
for (let key in person){
    console.log(key + ": "+ person[key]);
}
//Output: name: Loan, age: 26, city: Da Nang

* câu điều kiện này thường sử dụng để loop từng properties của 1 object không khuyến khích duyệt từng object của array

3. forEach method: thực thi 1 function cho mỗi phần tử và không thể dụng break/ continue bên trong 
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(value){
    console.log(value);
});
//Output: 1, 2, 3, 4, 5

# Utils function
Các tiện tích có sẵn của Javascript

1. String utils
- Bỏ khoảng trắng
    + trim(): bỏ khoảng trắng ở 2 đầu
    + trimStart(): bỏ khoảng trắng bên trái
    + trimEnd(): bỏ khoảng trắng bên phải
    
- Chuyển đổi chữ hoa/ thường
    + toUpperCase()
    + toLowerCase()

- Kiểm tra chuỗi có bao gồm chuỗi con không
let text = "Hello World"
console.log(text.includes("World")); //true
console.log(text.includes("Bye")); //false

- Tách chuỗi 
let text = "Hello world"
console.log(text.split(" ")); //"Hello", "world"

- Thay thế kí tự trong chuỗi
let text = "Hello world"
console.log(text.replace("world", "Loan")); //Hello Loan


2. Array utils
- Thêm phần tử vào mảng
    + Thêm vào cuối mảng: push(i)
    + Thêm vào đầu mảng: unshift(i)
    + Thêm vào bất kì vị trí: splice(vị trí thêm vào, số phần tử cần xoá, phần tử thêm vào);

- Xoá phần tử khỏi mảng
    + Xoá ở cuối: pop()
    + Xoá ở đầu: shift()
    + Xoá ở  bất kì vị trí: splice(vị trí thêm vào, số phần tử cần xoá);

- Tìm kiếm
    + Trả về phân tử đầu tiên hợp lệ: find()
    const numbers = [5, 12, 8, 130, 44];
    let first = numbers.find(num => num > 10);
    console.log(first); //output: 12

    + Trả về tất cả phần tử hợp lệ: filter()
    const numbers = [5, 12, 8, 130, 44];
    let all = numbers.filter(num => num > 10);
    console.log(first); //output: 12, 130, 44

- Biến đổi mảng: Tạo mảng mới từ mảng có sẵn: map()
    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(num => num * 2);
    console.log(doubled); //output: [2, 4, 6, 8, 10];

- Sắp xếp mảng
    let numbers = [5, 12, 8, 130, 44];
    // Sắp xếp tăng dần
    numbers.sort((a, b) => a - b); //[5, 8, 12, 44, 130];
    // Sắp xếp giảm dần
    numbers.sort((a, b) => b - a); //[130, 44, 12, 8, 5];

    Quy tắc: 
    + Nếu kết quả so sánh a b là số dương thì b đứng trước a
    + Nếu kết quả so sánh a b là số âm thì a đứng trước b




