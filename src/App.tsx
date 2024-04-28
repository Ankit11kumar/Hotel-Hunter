import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchPage from "./Components/SearchPage/searchPage";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPage />
      <Footer />
    </div>
  );
}

export default App;
