import React from "react";

const Mylist = () => {
    const Mylist = ["Karachi", "Islamabad", "Quetta", "Peshawar", "Multan"];
    return (
        <div>
            <h1>
                {Mylist.map((n, index) => (
                    <span key={index}>
                      {index}- My Favourite team is {n}
                        <br />
                    </span>
                ))}
            </h1>
        </div>
    );
}

export default Mylist;
