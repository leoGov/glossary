import "./card.css"

interface CardProps {
    word: String;
    description: string;
}

export default function Card({word, description}: CardProps) {
    return(
        <div className="card">
            <div className="card-header">
                {word}
            </div>
            <div className="card-description">
                {description}
            </div>
        </div>
    )
}