import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import MyForm from "./components/MyForm";

import SideBar from "./components/SideBar";
import { useState } from "react";
import PostListContextProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [tab, setTab] = useState("home");
  return (
    <>
      <PostListContextProvider>
        <div className="main_container">
          <SideBar tab={tab} setTab={setTab} />

          <div className="right">
            <Header setTab={setTab} />

            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListContextProvider>
    </>
  );
}

export default App;
