import * as React from "react";
import { Avatar } from "react-lorem-ipsum";

export const Header = ({title}) => (
    <header className="shop-header">
        <span className="date">Tuesday, August 13th</span>
        <h1 className="h1">{title}</h1>
        <div className="avatar">
            <Avatar />
        </div>
    </header>
);
