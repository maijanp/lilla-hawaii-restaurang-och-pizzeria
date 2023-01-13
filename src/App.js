import Header from "./Components/header/header";
import MenuCategory from "./Components/menucategory/menucategory";
import InfoBox from "./Components/InfoBox/infobox";
import About from "./Components/About/about";
import Nav from "./Components/navSmallScreen/navSmallScreen";
import { useEffect, useState } from "react";

function App() {
  const [class1, setClass1] = useState([]);
  const [class2, setClass2] = useState([]);
  const [class3, setClass3] = useState([]);
  const [class4, setClass4] = useState([]);
  const [salads, setSalads] = useState([]);
  const [meatDishes, setMeatDishes] = useState([]);
  const [burgers, setBurgers] = useState([]);

  const fetchFood = () => {
    fetch("/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        setClass1(data.class1);
        setClass2(data.class2);
        setClass3(data.class3);
        setClass4(data.class4);
        setSalads(data.salads);
        setBurgers(data.burgers);
        setMeatDishes(data.meatDishes);
      })
      .catch((err) => console.log(err));
  };

  console.log(class1);
  useEffect(fetchFood, []);
  return (
    <>
      <Header />
      <div className="container">
        <InfoBox />
        <About />
        <div id="menu" style={{ marginBottom: "4rem" }}>
          <div class="headline">
            <h2 style={{ textAlign: "center" }}>Meny</h2>
          </div>
          <MenuCategory
            id="pizza"
            price="95kr"
            category="Pizzor klass 1"
            food={class1}
          ></MenuCategory>
          <MenuCategory
            price="105kr"
            category="Pizzor klass 2"
            food={class2}
          ></MenuCategory>
          <MenuCategory
            price="115kr"
            category="Pizzor klass 3"
            food={class3}
          ></MenuCategory>
          <MenuCategory
            price="125kr"
            category="Pizzor klass 4"
            food={class4}
          ></MenuCategory>
          <MenuCategory
            id="salads"
            category="Sallader"
            price="105kr"
            food={salads}
          ></MenuCategory>
          <MenuCategory
            id="kebab"
            category="Kebab & Gyros"
            food={meatDishes}
          ></MenuCategory>
          <MenuCategory
            id="burgers"
            category="Hamburgare"
            food={burgers}
          ></MenuCategory>
        </div>
      </div>
      <Nav></Nav>
    </>
  );
}

export default App;
