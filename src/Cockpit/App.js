import classes from './App.module.css';
import Home from  '../Components/Home/Home';
import About from  '../Components/About/About';
import Contact from  '../Components/Contact/Contact';
import Projects from  '../Components/Projects/Projects';
import Menu from  '../Components/Menu/Menu';
import Page404 from  '../Components/Page404/Page404';
import {VscNote,VscChromeClose} from "react-icons/vsc";
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";



function App() {
  const [menu,setMenu] = useState(false);
  const resetMenu = () =>{
    setMenu(!menu);
  }

  return (
    <div className={classes.container}>
      <button className={classes.menuBtn} onClick={()=>setMenu(!menu)}>{(menu)? <VscChromeClose size={20}/>:<VscNote size={20} />}</button>
      {(menu) ? <Menu linkClickHandler={()=>resetMenu()}/> : <></>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />}/>
        <Route path="Projects" element={<Projects />}/>
        <Route path="Contact" element={<Contact />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
