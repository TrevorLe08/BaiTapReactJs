// 1. Viết 1 arrow function nhận vào 1 số, trả về true nếu số nguyên tố, false nếu không nguyên tố
// 2. Viết 1 arrow function nhận vào 1 mảng, sử dụng map để in ra các số nguyên tố trong mảng
// 3. Viết 1 arrow function nhận vào 1 mảng, trả về 1 mảng chỉ gồm các phần tử số nguyên tố, sử dụng filter
// 4. Viết 1 arrow function nhận vào 1 mảng, trả về 1 tổng các bình phương từng phần tử, sử dụng reduce

let a = 10
let arr = [3, 4, 5, 6, 7, 8]

// BT1
let f1 = num => { // check prime
    if (num < 2) return false
    if (num == 2) return true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}


console.log(f1(a));
console.log("-------------------------------------");

// BT2
let f2 = array => {
    array.map(x => {
        if (f1(x) == true) {
            console.log(x);
        }
    })
}
f2(arr)
console.log("-------------------------------------");

// Bt3
let f3 = array => array.filter(x => f1(x))
console.log(f3(arr))
console.log("-------------------------------------");

// Bt4 
let f4 = array => array.reduce((value,x) => value + x*x,0)
console.log(f4(arr));