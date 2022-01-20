import classes from "./Page404.module.css";
import Error404 from "../../Assets/404.svg"
const NotFound = () =>{
    return(<div className={classes.container}>
                <div className={classes.imageHolder}>
                    <img src={Error404} className={classes.image}/>
                    <div className={classes.textHolder}><h1>Page Not Found</h1></div>    
                </div>     
           </div>)
} 

export default NotFound;