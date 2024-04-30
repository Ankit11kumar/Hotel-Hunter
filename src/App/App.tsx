import "./App.css";
import SearchPage from "../Components/SearchPage/searchPage";
import Header from "../Components/Header/header";
import Footer from "../Components/Footer/footer";
import { Route, Routes } from "react-router-dom";
import SearchDetailPage from "../Components/SearchDetailPage/SearchDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" Component={SearchPage} />
        <Route path="/:type/:id" Component={SearchDetailPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
