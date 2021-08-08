import React from "react";

const Card = ({title='None',body='None',btnText='None',imageUrl}) =>(
    <div className="col-4">
        <div className="card" style={{width: '18rem'}}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {body}
                </p>
                <a href="#" className="btn btn-success">{btnText}</a>
            </div>
        </div>
    </div>

)

export default Card