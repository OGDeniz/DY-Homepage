import React from 'react';
import styles from "../../styles/Card.module.css";


type CardProps = {
    title: string;
    description: string;
    image?: string; // Optionales Bild
    link?: string;  // Optionaler Link
};

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
    return (
        <div className={styles.card}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {link && (
                    <a href={link} className={styles.link}>
                        Learn more →
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
