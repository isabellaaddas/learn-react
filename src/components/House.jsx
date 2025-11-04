import "./../css/House.css";

const House = (props) => {
    return (
        <section className="house">
            <h1>{props.name}</h1>
            <img src={"https://portiaportia.github.io/json/images/house-plans/"+props.main_image} alt="House" />
            <p>Bed: {props.bedrooms}</p>
        </section>
    );
};

export default House;