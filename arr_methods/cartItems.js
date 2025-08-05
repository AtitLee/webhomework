const products = [
  {
    id: 101,
    name: "หูฟังบลูทูธ Sony",
    category: "Electronics",
    price: 4590,
    stock: 15,
  },
  {
    id: 102,
    name: "คีย์บอร์ด Mechanical",
    category: "Electronics",
    price: 2800,
    stock: 8,
  },
  {
    id: 201,
    name: "หนังสือ The Pragmatic Programmer",
    category: "Books",
    price: 850,
    stock: 30,
  },
  {
    id: 202,
    name: "หนังสือ Clean Code",
    category: "Books",
    price: 799,
    stock: 0,
  }, // สินค้าหมด
  {
    id: 301,
    name: "แก้วกาแฟ Starbucks",
    category: "Lifestyle",
    price: 550,
    stock: 25,
  },
];

const user = {
  name: "สมศักดิ์",
  shoppingCart: [
    { productId: 101, quantity: 1 }, //หูฟัง Sony 1 อัน
    { productId: 201, quantity: 2 },
    { productId: 102, quantity: 1 },
    { productId: 202, quantity: 1 },
    { productId: 301, quantity: 1 },
  ],
};

function processCart(customer,productList) {
    console.log(`========= เริ่มประมวลผลการสั่งซื้อของลูกค้า ${customer.name}=========`);

    const enrichedCart = customer.shoppingCart.map((item) => {
        const productDetails = productList.find((product) => product.id === item.productId);
        if(productDetails.stock < item.quantity) {
            // console.log(`${productDetails.name} สินค้าไม่เพียงพอ`);
            return null;
        }   

        return{
            ...productDetails,
            quantity: item.quantity,
            subtotal: productDetails.price * item.quantity,
        }
        });

        const availableItems = enrichedCart.filter(item => item !== null);
        // คำนวณราคารวม totalprice => reduce
        // เรียงรายการสินค้าจากราคาสูงไปต่ำ => sort
        // หูฟังบลูทูธ Sony x 1 | ราคา: 4590 บาท =>for.each/for...of
        // ยอดรวมสุทธิ -> totalPrice
        
        let totalPrice = 0;
        const priceSum = availableItems.reduce((total, item) => {
            totalPrice += item.subtotal;
        }, 0);
        const sortItems = availableItems.sort((a, b) => b.price - a.price);
        sortItems.forEach((item) => {
            console.log(`${item.name} x ${item.quantity} | ราคา: ${item.price} บาท`);
        });
        console.log("----------------------------------------------");
        console.log(`ยอดรวมสุทธิ: ${totalPrice.toLocaleString()} บาท`);
        console.log("===============================================")
}

processCart(user, products);