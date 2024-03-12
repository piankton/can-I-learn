const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function print(element) {
    console.log(element);
}
print(numbers[0]);
// เรียก array แบบทีละตัว
console.log("---------") //ตัวคั่นโค้ด

numbers.forEach(print);
// เรียกจนกว่าจะครบทุกตัว
console.log("---------") //ตัวคั่นโค้ด


numbers.forEach(function (pram) {
    console.log(pram);
});
//ผลลัพเหมือนกับข้างบน แต่สะดวกต่างกัน ตรงที่ใช้ครั้งเดียวกับใช้แล้วแก้ไขโค้ดมองง่ายกว่า
console.log("---------") //ตัวคั่นโค้ด

const movie = [
    {
        title: `dsca`,
        score: 99
    },
    {
        title: `fdcdcv`,
        score: 21
    }, {
        title: 'dscv',
        score: 88
    },{
        title: "asdc",
        score: 100
    },{
        title: "adcsa",
        score: 50
    }
]

movie.forEach(function (movie){
    console.log(`${"Title :" + movie.title} - ${movie.score}/100`);
});
console.log("---------") //ตัวคั่นโค้ด