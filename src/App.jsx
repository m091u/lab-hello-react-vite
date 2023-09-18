// src/App.jsx
import "./App.css";
import img1 from "./assets/images/icon1.png";
import img2 from "./assets/images/icon2.png";
import img3 from "./assets/images/icon3.png";
import img4 from "./assets/images/icon4.png";
import logo from "./assets/images/ironhack-logo-xs.png";
import nav from "./assets/images/menu-top-xs.png";

const cards = [
  {
    image: img1,
    title: "Declarative",
    description: "React makes it painless to crteate interactive UIs",
  },
  {
    image: img2,
    title: "Components",
    description: "Build encapsulated components that manage their state",
  },
  {
    image: img3,
    title: "Single-Way",
    description: "A set of immutable valuea are passed to the components",
  },
  {
    image: img4,
    title: "JSX",
    description: "Statically-typed, designed to run on modern browsers",
  },
];

const Card = ({ image, title , description}) => (
  <div className="card">
    <img src={image} alt="imageAlt" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

function App() {
  return (
    <>
      <div className="navBar">
        <img src={logo} />
        <img src={nav} />
      </div>
      
      <div className="header">
        <h1>Say hello to ReactJs</h1>
        <p className="headerp">
          You will learn how to use the most popular frontened library, and
          become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>

      <div className="cards">
      {cards.map(({ image, title, description }, index) => {
        return (
          <Card className="cardBox"
            key={index}
            image={image}
            title={title}
            description={description}
          />
        );
      })}
      </div>
    </>
  );
}

export default App;
