import classes from './About.module.css';
import {useState} from "react";
import codingBro from "../../Assets/Coding-bro.svg";
import landingPage from "../../Assets/landingPage.svg";
import programmingBro from "../../Assets/Programming-bro.svg";




const About = () =>{
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (number) =>{
        setActiveTab(number);
    }
    return (<div className={classes.aLayout} id="about">
                <div className={classes.tab}>
                    <div className={classes.tabHeader}>
                        <div className={activeTab === 1? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(1)}}>About</div>
                        <div className={activeTab === 2? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(2)}}>Work</div>
                        <div className={activeTab === 3? `${classes.active} ${classes.tabHItem}`:`${classes.tabHItem}`} onClick={()=>{changeActiveTab(3)}}>Skills</div>
                    </div>
                    <div className={classes.tabContent}>
                        <div className={activeTab === 1? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.image}>
                                <img src={landingPage} alt="tab1Image"/>
                            </div>
                            <div className={classes.content}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </span> 
                            </div>
                        </div>
                        <div className={activeTab === 2? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.content}>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </span>
                            </div>
                            <div className={classes.image}>
                                <img src={codingBro} alt="tab2Image"/>
                            </div>
                        </div>
                        <div className={activeTab === 3? `${classes.activeContent}`:`${classes.tabItem}`}>
                            <div className={classes.image}>
                                <img src={programmingBro} alt="tab3Image"/>
                            </div>
                            <div className={classes.content}>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)

}
export default About;