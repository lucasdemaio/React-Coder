import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./loading.css"

const Loading = () => {
    return (

        <div className="loading">
            <AiOutlineLoading3Quarters />
            <p>Cargando...</p>
        </div>
    )
}

export default Loading