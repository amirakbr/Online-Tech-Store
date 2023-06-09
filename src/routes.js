import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import ShoppingCart from "./Pages/ShoppingCart";
import Checkout from "./Pages/Checkout";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";

let router = [
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/product/:category/:id", element: <ProductDetails /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/shoppingcart", element: <ShoppingCart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/aboutus", element: <AboutUs /> },
];

export default router;
