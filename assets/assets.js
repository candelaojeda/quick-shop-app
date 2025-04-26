import logo from "./logo_xl.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import digital_camera from "./digital-technology-camera.png";
import computer_156_pulgadas_i3 from "./computer-15.6-pulgadas-i3.png";
import tv_apple from "./tv-apple.png";

export const assets = {
  logo,
  search_icon,
  user_icon,
  digital_camera,
  computer_156_pulgadas_i3,
  tv_apple,
};

export const productsDummyData = [
  {
    id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Industrial Scanner",
    description: "Description Name.",
    price: 499.99,
    offerPrice: 399.99,
    image: ["/public/images/industrial-scanner.png"],
    category: "Category Name",
    date: 1738667236865,
    __v: 0,
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Apple Computer",
    description: "Description Name.",
    price: 429.99,
    offerPrice: 329.99,
    image: ["/public/images/apple-computer.png"],
    category: "Category Name",
    date: 1738667310300,
    __v: 0,
  },
];

export const userDummyData = {
  _id: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "Candela Ojeda",
  email: "admin@example.com",
  imageUrl: "/public/images/user-admin 1.png",
  cartItems: {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  __v: 0,
};

export const addressDummyData = [
  {
    _id: "67a1e4233f34a77b6dde9055",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    fullName: "Candela Ojeda",
    phoneNumber: "0123456789",
    pincode: 654321,
    area: "Main Road , 123 Street, G Block",
    city: "City",
    state: "State",
    __v: 0,
  },
];

export const orderDummyData = [];
