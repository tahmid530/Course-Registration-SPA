import React from "react";

const course = ({ course }) => {
    const { image, title, description, price, credit } = course;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="text-[#1C1B1B] text-lg font-semibold">{title}</h2>
                <p className="text-[#1C1B1B99] text-sm">{description}</p>
                <div className="flex text-[#1C1B1B99] font-medium gap-4">
                    <h3>Price: {price}</h3>
                    <h3>Credit: {credit}</h3>
                </div>
                {/* <button className="btn btn-active btn-primary">Primary</button> */}
                <button className="btn btn-wide bg-[#2F80ED] text-[white] hover:bg-black">Wide</button>
            </div>
        </div>
    )
}
export default course;