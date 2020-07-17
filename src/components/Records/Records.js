import React from "react";

export const Records = ({item, field, label}) => {
    return (
        <li>
            <b>{`${ label }: `}</b>
            { item[field] }
        </li>
    );
}