import React, { useState } from "react";
import './Post.css'
 
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p>
            {isReadMore ? text.slice(0, 60) : text}
            <span
                onClick={toggleReadMore}
                className="read_button"
            >
                {isReadMore ? " ...leer más" : " leer menos"}
            </span>
        </p>
    );
};
 
const Content = ({description}) => {
    return (
        <div className="post_description">
            {/* <h2> */}
                <ReadMore>
                    {description}
                </ReadMore>
            {/* </h2> */}
        </div>
    );
};
 
export default Content;