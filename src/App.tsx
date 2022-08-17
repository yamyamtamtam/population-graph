import React from "react";
import PrefecturesList from "./prefecturesList";
import Style from "./css/app.module.css";

const App = () => {
  return (
    <div>
    <header className={Style.header}>
      <h1>都道府県別人口分布</h1>
    </header>
    <main className={Style.wrapper}>
        <PrefecturesList />
    </main>
    <footer className={Style.footer}>
      <a href="https://yamyamtamtam.tech/" target="_blank" rel="noreferrer" className={Style.button}>Myblog.</a>
      <h6>yamyamtamtam All right reserved.</h6>
    </footer>
    </div>
  );
};

export default App;
