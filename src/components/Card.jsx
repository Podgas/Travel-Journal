import React from "react";

export default function Card(props) {
    return (
        <section className="card">
            <div className="card--img-container">
                <img src={props.imageUrl} alt="Covadonga monastery" />
            </div>
            <div className="card--info">
                <div className="card--location-container">
                    <h3>
                        <i className="fa-solid fa-location-dot"></i>
                        {props.location}
                    </h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1 className="card--title">{props.title}</h1>
                <h2 className="card--date">
                    {props.startDate} - {props.endDate}
                </h2>
                <p className="card--description">{props.description}</p>
            </div>
        </section>
    );
}
