import React, { useState, useEffect } from "react";
//@ts-ignore
import iconFAQ from '../IMGS/img_arrowdown.png';

interface FAQCardProps {
    name: string;
    description: string;
}

const FAQCard: React.FC<FAQCardProps> = ({ name, description }) => {
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;

        if (isDescriptionVisible) {
            let index = 0;
            setDisplayedText("");
            timer = setInterval(() => {
                if (index < description.length) {
                    const nextChar = description[index];
                    if (nextChar !== undefined) {
                        setDisplayedText(prevText => prevText + nextChar);
                        index++;
                    }
                } else {
                    clearInterval(timer);
                }
            }, 10);
        } else {
            setDisplayedText("");
        }

        return () => clearInterval(timer);
    }, [isDescriptionVisible, description]);

    const toggleDescriptionVisibility = () => {
        setDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <button className="box-card-FAQ" onClick={toggleDescriptionVisibility}>
            <div className="title-FAQ alegreya">{name}</div>
            <div className="alegreya description-FAQ">{displayedText}</div>
        </button>
    );
};

export default FAQCard;