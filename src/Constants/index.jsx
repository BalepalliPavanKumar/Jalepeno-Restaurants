import bir from "../assets/bir.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import rambo from "../assets/rambo.jpeg";
import afg from "../assets/afg.jpeg";
import prawns from "../assets/prawns.jpeg";
import dish10 from "../assets/dish10.jpeg";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

// customer images
import customer1 from "../assets/customer1.jpeg"
import customer2 from "../assets/customer2.jpeg"
import customer3 from "../assets/customer3.jpeg"
import customer4 from "../assets/customer4.jpeg"

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "#dishes" },
  { text: "About", targetId: "#about" },
  { text: "Mission", targetId: "#mission" },
  { text: "Expertise", targetId: "#expertise" },
  { text: "Review", targetId: "#review" },
  { text: "Contact", targetId: "#contact" },
];

export const DISHES = [
  {
    image: bir,
    title: "Spl Chicken Biryani",
    description: "Layering marinated chicken with fragrant basmati rice, aromatic spices, and herbs, then slow-cooking it to create a rich, flavorful dish.",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: rambo,
    title: "Rambo Chicken",
    description: "Marinating the chicken with spices, then grilling, roasting, or frying it to achieve tender, flavorful meat.",
  },
  {
    image: afg,
    title: "Boneless Afghani Chicken",
    description: "Boneless chicken pieces in a creamy yogurt and spice mix, then grilling or baking until juicy and flavorful.",
  },
  {
    image: prawns,
    title: "Andhra Prawn",
    description: "Prawns with a spicy blend of Andhra-style spices, curry leaves, and tamarind, creating a flavorful and fiery dish.",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "John",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CUSTOMERIMAGES = [customer1, customer2, customer3, customer4]

export const CONTACT = [
  { key: "address", href:"", value: "Address: Near church street,Sanfransico" },
  { key: "phone",href:"callto: +91 9550073441",  value: "Phone: +91 9550073441" },
  { key: "email",href:"mailto: JalepanoRestaurants@gmail.com", value: "Email: JalepanoRestaurants@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/login/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80 " />,
  },

  {
    href: "https://www.instagram.com/kanishka_restaurant/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/login/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
