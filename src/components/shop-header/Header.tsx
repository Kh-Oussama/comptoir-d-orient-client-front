import * as React from "react";
import {useState} from "react";
import {Avatar} from "react-lorem-ipsum";

export const Header = ({title}) => {
    const date = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
    };
    const [currentDateTime, setCurrentDateTime] = useState(date.toLocaleString('fr-FR', options))

    return (
        <header className="shop-header">
            <span className="date">{currentDateTime}</span>
            <h1 className="h1">{title}</h1>
            <div className="avatar">
                <Avatar/>
            </div>
        </header>
    )
        ;
}
