import React from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import Post from "./components/Post"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path= "/:post_id" component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
