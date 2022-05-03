import classes from './Projects.module.css';
import HCards from '../HCards/HCards';
import tasks from  "../../Assets/Add-tasks-bro.svg";
import setup from "../../Assets/undraw_taking_notes_re_bnaf.svg";
import pokedex from "../../Assets/POKEMON2.svg";
import landscape from  "../../Assets/Working from anywhere-amico.svg";
import restaurant from "../../Assets/Coffee shop-bro (1).svg";
import directory from "../../Assets/Transfer files-bro.svg";
import tables from "../../Assets/Spreadsheets-rafiki.svg"
const Projects = () =>{
    return (<div className={classes.pLayout} id="projects">
                <div className={classes.cardContainer}>
                    <HCards desc="A restfull API built for searching filtering and sorting the restaurants. Uses SQL Database" repoLink="https://github.com/abhijeetiyer1996/RestaurantsAPI" header="Restaurant API" image={restaurant}></HCards>
                    <HCards desc="A centralized directory for users where they can store/upload and retrieve their files" repoLink="https://github.com/abhijeetiyer1996/Personal-DIrectory" header="Personal Directory" image={directory}></HCards>
                    <HCards desc="A simple design based assignment to manage and control the data taken from the API and stored in the LocalStorage" repoLink="https://github.com/abhijeetiyer1996/reactantproject" header="Tables using Ant-design" image={tables}></HCards>
                    <HCards desc="A react based project that uses Poke API to display the information related to each pokemon" repoLink="https://github.com/abhijeetiyer1996/pokedexv2" liveSite="https://reactpokedexv2.netlify.app/" header="Pokedex using PokeAPI" image={pokedex}></HCards>
                    <HCards desc="A simple task list project where you can create update delete tasks persistent to the local stroage." repoLink="https://github.com/abhijeetiyer/taskLists"liveSite="https://abhijeetiyer.github.io/taskLists/" header="Task List" image={tasks}></HCards>
                    <HCards desc="A simple JSON based project where user can costomize his own form by copying the JSON inputs and pasting it other form" repoLink="https://github.com/abhijeetiyer1996/form-customizer" header="Form Maker" image={setup}></HCards>
                    <HCards desc="A simple Landing Page using HTML and CSS (includes form validation)" repoLink="https://github.com/abhijeetiyer/task_3" header="Landing Page using CSS" liveSite="https://abhijeetiyer.github.io/task_3/" image={landscape}></HCards>
                </div>
            </div>)
}
export default Projects;