const users = [
    {id:1, name:"john" , email: "john.s@gmail.com"},
    {id:2, name:"jane" , email: "marysocut@gmial.com"},
    {id:3, name:"somchai" , email: "vourdad@gmail.com"},
];

for(const user of users){
    console.log(user.name);
}
console.log("=====================================");

users.forEach((user) => {
    console.log(user.name);
});

console.log("=====================================");

const userNames = users.map((user) => user.name);

console.log(userNames);

const products = [
    {name: 'ปากกา',stock: 10},
    {name: 'ดินสอ',stock: 15},
    {name: 'ยางลบ',stock: 8},
    {name: 'ไม้บรรทัด',stock: 12},
];

const lowstock = products.filter((product => product.stock < 10));
console.log(lowstock);

const cartItems = [
{name:'เสื้อยืด', price: 199, quantity: 4},
{name:'กางเกง', price: 250, quantity: 8},
{name:'รองเท้า', price: 620, quantity: 2},
{name:'หมวก', price: 199, quantity: 12},
];

// for...of
let totalPrice = 0;
for(const item of cartItems){
    totalPrice += item.price * item.quantity;
}
console.log(totalPrice);
// reduce
totalPrice = cartItems.reduce((total, currentItem) => {
    return total + (currentItem.price * currentItem.quantity);
}, 16);
console.log(`มูลค่ารวมทั้งหมด ${totalPrice} บาท`);

// find
const findResult = cartItems.find((item) => item.name === 'กางเกง');
console.log(findResult);

const players = [
    {name: 'Messi', score: 177},
    {name: 'Ronaldo', score: 190},
    {name: 'Neymar', score: 142},
    {name: 'Somchai', score: 255},
]

// แสดงชื่อของ player ที่ได้ score เกิน 150 เรียงจากมากไปน้อย
const highScorePlayers = players.filter((player) => player.score > 150);
console.log(highScorePlayers);
const sortHighScores = highScorePlayers.sort((a, b) => b.score - a.score);
console.log(sortHighScores);
const nameHiPlayers = sortHighScores.map((player) => player.name);
console.log(nameHiPlayers);

const topScores = players.filter((player) => player.score > 150).sort((a, b) => b.score - a.score).map((player) => player.name);
console.log(topScores);

const someResult = players.some((player) =>player.score > 200);
console.log(someResult);

const evaryResult = players.every((player) => player.score > 100);
console.log(evaryResult);