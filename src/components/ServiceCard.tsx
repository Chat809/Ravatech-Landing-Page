import React, { useState, useEffect } from "react";

interface ServiceCardProps {
    imgCard: string;
    alt: string;
    serviceName: string;
    serviceDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imgCard, serviceName, alt, serviceDescription }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDescriptionVisible, setDescriptionVisible] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;

        if (isDescriptionVisible) {
            let index = 0;
            setDisplayedText("");
            timer = setInterval(() => {
                if (index < serviceDescription.length) {
                    const nextChar = serviceDescription[index];
                    if (nextChar !== undefined) {
                        setDisplayedText(prevText => prevText + nextChar);
                        index++;
                    }
                } else {
                    clearInterval(timer);
                }
            }, 10);
        } else {
            timer = setInterval(() => {
                if (displayedText.length > 0) {
                    setDisplayedText(prevText => prevText.slice(0, -1));
                } else {
                    clearInterval(timer);
                }
            }, 10);
        }

        return () => clearInterval(timer);
    }, [isDescriptionVisible, serviceDescription]);

    const toggleDescriptionVisibility = () => {
        setDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <div className="box-card-services" onClick={toggleDescriptionVisibility}>
            <img className="img-card-services" src={imgCard} alt={alt} />
            <div className="project-card-name poppins">{serviceName}</div>
            <div className="service-card-description poppins">{displayedText}</div>
        </div>
    );
};

export default ServiceCard;