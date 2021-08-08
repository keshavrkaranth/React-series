import React from "react";
import Card from "./card";


const CardSection = () =>(
    <section className="contact bg-success ">
        <div className="container ">
            <h2 className="text-white">
                We love new friends!
            </h2>
            <div className="row">
                <Card title={"Daytona 675R"} body={"The bike is powered by a three cylinder, liquid-cooled 675cc engine."} btnText={"Click here to buy"} imageUrl={"https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
                <Card title={"BMW GS1250A"} body={"BMW Motorrad India made headlines ever since it unveiled the 2021 BMW R 1250 GS in the Indian market."} btnText={"Pre Book"} imageUrl={"https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />
                <Card title={"Suzuki Hayabusa"} body={"he Suzuki GSX1300R Hayabusa is a sport bike motorcycle made by Suzuki since 1999."} btnText={"Test Ride"} imageUrl={"https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} />

            </div>
        </div>
    </section>
)

export default CardSection
