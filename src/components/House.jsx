import "./../css/House.css";
import housePic from "./../images/house.jpg";

const House = (props) => {
    return (
        <section className="house">
            <h1>{props.name}</h1>
            <img src={housePic} alt="House" />
            <p>Bed: {props.num_bedrooms}</p>
        </section>
    );
};

export default House;