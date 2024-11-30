import { useParams } from "react-router-dom";
import './SingleAircraftPage.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from './../components/Spinner'
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const SingleAircraftPage = () => {
    const { id } = useParams();
    const [aircraft, setAircraft] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`http://localhost:3001/aircrafts/${id}`)
            .then(res => res.data)
            .then(data => {
                setAircraft(data);
                setIsLoading(false);
            })
    }, [id])

    const { name, image, description, price } = aircraft;

    return isLoading ?
    <Spinner />
    :
    <div className="single-aircraft-page">
        <img className="single-aircraft-image" src={image} alt={name} />
        <div className="single-aircraft-desc">
            <p className="single-aircraft-title">{name}</p>
            <p>{description}</p>
            <p>{`Price: ${price}$`}</p>
            <button className="single-aircraft-cart-button" onClick={() => {
                dispatch(addItem({
                    name: name,
                    quantity: 1,
                    price: price,
                }));
                alert(`Successfully added ${name}`)
            }}>Add to Cart</button>
        </div>
    </div>
}

export default SingleAircraftPage;
