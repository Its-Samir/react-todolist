import React from 'react';

function Weekday() {

    const today = new Date();
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return (
        <h2 className="heading">
            {weekday[today.getUTCDay()] === "Sunday"
                ? `Hurray! It's` : `Wheep! It's`} {weekday[today.getUTCDay()]}
        </h2>
    )
}

export default Weekday;