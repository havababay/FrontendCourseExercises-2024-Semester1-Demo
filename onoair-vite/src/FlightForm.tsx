import { useParams } from "react-router-dom"

export default function FlightForm() {
    const {id} = useParams();

    return (
        <div>
            <h1>Flight {id}</h1>
        </div>
    );
}