const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const double = numbers.map(function (params) {
    return params * 2;
});
// map คือการทำงานคล้ายกับ forEach แต่จะเป็นการเก็บข้อมูลหลังจากทำงานสำเร็จไว้ในตัวแปรใหม่ ในที่นี้กำหนดให้ *2จำนวนทั้งหมดใน array และนำไปเก็บไว้ในตัวแปร double 