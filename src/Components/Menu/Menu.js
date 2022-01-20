import classes from './Menu.module.css';
import avatar from '../../Assets/avataaars.svg'
import {VscHome,VscPreview,VscRootFolder,VscMail} from "react-icons/vsc";
import {Link} from 'react-router-dom';

const Menu = ({linkClickHandler}) =>{
    return (<div className={classes.menu}>
                <div className={classes.avatar}>
                    {/* AI */}
                    <img alt="avatar" src={avatar}/>
                </div>
                <ul className={classes.nav}>
                    <Link to="/" className={classes.link} onClick={()=>linkClickHandler()}><li className={classes.navItems}><span className={classes.iconHolder}><VscHome size={20} /></span><span className={classes.textHolder}>Home</span></li></Link>
                    <Link to="/About" className={classes.link}  onClick={()=>linkClickHandler()}><li className={classes.navItems}><span className={classes.iconHolder}><VscPreview size={20} /></span><span className={classes.textHolder}>About</span></li></Link>
                    <Link to="/Projects" className={classes.link}  onClick={()=>linkClickHandler()}><li className={classes.navItems}><span className={classes.iconHolder}><VscRootFolder size={20} /></span><span className={classes.textHolder}>Projects</span></li></Link>
                    <Link to="/Contact" className={classes.link}  onClick={()=>linkClickHandler()}><li className={classes.navItems}><span className={classes.iconHolder}><VscMail size={20} /></span><span className={classes.textHolder}>Contact</span></li></Link>
                </ul>
            </div>)
}
export default Menu;