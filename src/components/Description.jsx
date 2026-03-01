import "./../App.css";

export default function Description({...props}) {
    return (
        <div className="pink">
            <div>{props.text}</div>
        </div>
    )
}