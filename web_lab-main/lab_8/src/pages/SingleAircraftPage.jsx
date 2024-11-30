import { useParams } from "react-router-dom";
import { aircrafts } from "../aircrafts";
import './SingleAircraftPage.css';

const SingleAircraftPage = () => {
    const { id } = useParams();
    const aircraft = aircrafts.filter((el) => el.id === parseInt(id));
    const { name, description, price, image } = aircraft[0];

    return <div className="single-aircraft-page">
        <img className="single-aircraft-image" src={image} alt={name} />
        <div className="single-aircraft-desc">
            <p className="single-aircraft-title">{name}</p>
            <p>{description}</p>
            <p>{`Price: ${price}$`}</p>
        </div>
    </div>
}

export default SingleAircraftPage;
