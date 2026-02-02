
import { IoIosFitness } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import { RecipeInfo } from "./RecipeInfo";

export const Recipe = ({ recipe }) => {
    console.log(recipe);
    return <ul>
        {recipe.map(({name, time, serving,calories,difficulty,image,},index) => {
            return <li key={index}>
                <img src={image} alt={name} width="300"/>
                <h2>{name}</h2>
                {/* <p>{time}</p>
                <p>{ serving}</p>
                <p>{ calories}</p>
                <p>{ difficulty}</p> */}
                <RecipeInfo text={`time; ${time} min`} icon={<MdTimer />} />
                <RecipeInfo text={`serving; ${serving}`} icon={<FaPeopleGroup />} />
                <RecipeInfo text={`calories; ${calories}`} icon={<IoFastFood />} />
                <RecipeInfo text={`difficulty; ${difficulty}`} icon={<IoIosFitness/>} />
        </li>
    })}
    </ul>
        
    
}