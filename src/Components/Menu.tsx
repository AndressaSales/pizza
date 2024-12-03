import TraditionalPizza from "../Components/TraditionalPizza"
import SweetPizza from "./SweetPizza"

export default function Menu(){
    return(
        <>
            <div className="menu-container">
                <h2>Menu</h2>
            </div>

            <div className="menu-traditional">
                <h3><span>Pizza</span> Tradicional</h3>
                <TraditionalPizza />
                <h3><span>Pizza</span> Doce</h3>
                <SweetPizza />
            </div>
        </>
    )
}