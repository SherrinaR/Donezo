import React from "react";
import "./HomePage.css";
import BottomNav from "../components/BottomNav";


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to Donezo </h1>
      <div className="grid">
      </div>
      <BottomNav />
    </div>
  );
};

export default HomePage;
