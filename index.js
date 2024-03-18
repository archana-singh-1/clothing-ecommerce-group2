const Api = [
    {
        img: "https://i.ibb.co/nDxkfyn/shirt1.jpg",
        rating: 3.8,
        price: 1100,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/GHwNLh9/shirt2.jpg",
        rating: 4.8,
        price: 1400,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/nz4qrt3/shirt3.webp",
        rating: 2.5,
        price: 1500,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/pQTbV23/shirt4.jpg",
        rating: 4.2,
        price: 400,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/DD0QqHs/shirt5.jpg",
        rating: 4.3,
        price: 600,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/ry6yGQr/shirt6.jpg",
        rating: 4.7,
        price: 7,
        type: "Shirt"
    },
    {
        img: "https://i.ibb.co/tZKRsNw/lower1.jpg",
        rating: 2.8,
        price: 800,
        type: "Lower"
    },
    {
        img: "https://i.ibb.co/Lr1z07W/lower2.jpg",
        rating: 5.2,
        price: 300,
        type: "Lower"
    },
    {
        img: "https://i.ibb.co/bHT87JG/lower3.jpg",
        rating: 1.8,
        price: 1100,
        type: "Lower"
    },
    {
        img: "https://i.ibb.co/PD9jssj/jeans1.jpg",
        rating: 4.2,
        price: 2200,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/ZTb9ZcG/jeans2.jpg",
        rating: 5.7,
        price: 2800,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/PT2xLWT/jeans3.jpg",
        rating: 7.4,
        price: 900,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/Ypp4wrF/jeans4.jpg",
        rating: 5.3,
        price: 1500,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/KVtxjML/jeans5.jpg",
        rating: 2.2,
        price: 2100,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/f1HSxRC/jeans6.jpg",
        rating: 5.5,
        price: 1700,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/GQqf8rs/jeans7.jpg",
        rating: 2.4,
        price: 1300,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/Yp5tpps/jeans8.jpg",
        rating: 4.9,
        price: 900,
        type: "Jeanes"
    },
    {
        img: "https://i.ibb.co/RcFtHx9/T-shirt1.webp",
        rating: 5.6,
        price: 350,
        type: "T-Shirt"
    },
    {
        img: "https://i.ibb.co/NtkJ2yS/T-shirt-2.webp",
        rating: 5.6,
        price: 500,
        type: "T-Shirt"
    },
    {
        img: "https://i.ibb.co/hX8nh1T/T-shirt-3.webp",
        rating: 5.4,
        price: 250,
        type: "T-shirt"
    },
    {
        img: "https://i.ibb.co/nLwVd6m/T-shirt-4.webp",
        rating: 4.8,
        price: 250,
        type: "T-Shirt"
    },
    {
        img: "https://i.ibb.co/PrjxnVF/T-shirt-5.webp",
        rating: 4.9,
        price: 650,
        type: "T-shirt"
    },
    {
        img: "https://i.ibb.co/9VkSrJf/T-shirt-6.webp",
        rating: 4.1,
        price: 300,
        type: "T-Shirt"
    },

]


const file_main={}
const fs=require("fs")

const buyNowButtons = document.querySelectorAll('.buy-now-button');
buyNowButtons.forEach(button => {
    button.addEventListener("click", function () {
        const parentElement = this.parentElement;
        const productRating = parseFloat(parentElement.querySelector('.span-rating').innerText);
        const matchedData = Api.find(product => product.rating === productRating);
        if (matchedData) {
            console.log(matchedData)
            // const fileData = JSON.stringify(matchedData, null, 4);
            // fs.writeFileSync(file_main, fileData);
        } else {
            console.log("Data not found");
        }
    });
});
const data = document.querySelector(".first-tag")
data.innerText = p


















