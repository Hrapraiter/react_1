import './Card.css';
import Male from '../icons/male.png';
import Female from '../icons/female.png';

function Card(props)
{
    return(
        <div className="card">
            {console.log(props.photo)}
            {<img src={props.photo} alt="photo" />}
            <div>
                {props.human.name}
                {props.human.surname}
                {props.human.age} 
            </div>
            <img src={props.human.pol === 'male' ? Male : Female} className="sex"/>
        </div>
    )
}
export default Card;