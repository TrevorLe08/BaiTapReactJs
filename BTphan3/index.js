// Tạo mảng sản phẩm có id, name, price, quantity.
// 1. Sử dung map, in ra name và price cua cac sản phẩm
// 2. Sử dụng map, tìm ra các  sản phẩm có giá > 100
// 3. Sử dụng filter, tìm ra các  sản phẩm có giá > 100
// 4. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)
// 5. Sử dụng reduce, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm (tổng giá*số lượng)

let arrProduct = [
    { id: 1, name: "Coca Cola", price: 100, quantity: 5 },
    { id: 2, name: "Pepsi", price: 90, quantity: 10 },
    { id: 3, name: "Fanta", price: 75, quantity: 15 },
    { id: 4, name: "Sprite", price: 110, quantity: 2 },
    { id: 5, name: "Mirinda", price: 120, quantity: 3 }
]

console.log("---1. Sử dung map, in ra name và price cua cac sản phẩm---");
// BT1
let f1 = (array) => {
    array.map(x => console.log("Tên sản phẩm:",x.name,".Giá thành:",x.price,"VNĐ"))
}
f1(arrProduct)
console.log("---2. Sử dụng map, tìm ra các  sản phẩm có giá > 100---");

// BT2
let f2 = (array) => {
    array.map(x => {
        if (x.price > 100) {
            console.log("Tên sản phẩm:",x.name,".Giá thành:",x.price,"VNĐ");
        }
    })
}
f2(arrProduct)
console.log("---3. Sử dụng filter, tìm ra các  sản phẩm có giá > 100---");

// BT3
let f3 = (array) => {
    let newArr = array.filter(x => x.price < 100)
    newArr.map(x => console.log("Tên sản phẩm:",x.name,".Giá thành:",x.price,"VNĐ"))
}
f3(arrProduct)
console.log("---4. Sử dụng map, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm---");

// BT4
let f4 = (array) => {
    let sum = 0
    array.map(x => sum += x.price*x.quantity)

    console.log("Giá tiền khi bán hết sản phẩm",sum);
}
f4(arrProduct)
console.log("---5. Sử dụng reduce, tính tổng tiền hàng sẽ có nếu bán hết toàn bộ sản phẩm---");

// BT5
let f5 = (array) => {
    let sum = array.reduce((s,x) => s+x.price*x.quantity,0)
    console.log("Giá tiền khi bán hết sản phẩm",sum);
}
f5(arrProduct)