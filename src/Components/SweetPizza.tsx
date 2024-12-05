import pizzaChocolate from "../assets/pizza_chocolate.jpeg"
import pizzachocomorango from "../assets/pizza_chocolate_morango.jpeg"
import pizzabanana from "../assets/pizza_banana.jpeg"
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function SweetPizza(){

    const sweets = [
        {
            id: 1,
            title: "Pizza de Morango ",
            url: pizzachocomorango,
            text: "Lorem ipsum dolor sit.",
            cash1: 34.90,
            cash2: 35.90 
        },
        {
            id: 2,
            title: "Pizza de Banana",
            url: pizzabanana,
            text: "Lorem ipsum dolor sit.",
            cash1: 27.90,
            cash2: 28.90
        },
        {
            id: 3,
            title: "Pizza de Chocolate",
            url: pizzaChocolate,
            text: "Lorem ipsum dolor sit.",
            cash1: 29.00,
            cash2: 30.90
        }
    ]

    return(
        <div className="container-menu">
            {
                sweets.map((s) => {
                    return(
                        <div key={s.id} className="card-menu">
                            <div className="card-img">
                                <img src={s.url} />
                            </div>

                            <div className="body-card">
                                <h4 className="title">{s.title}</h4>
                                <p className="text">{s.text}</p>
                                <div >
                                    <FaStar color="orange" />
                                    <FaStar color="orange" />
                                    <FaStar color="orange" />
                                    <FaStar color="orange" />
                                    <FaStarHalf color="orange" />
                                </div>
                                <div className="cash-menu">
                                    <label className="dcash">R$ {s.cash2}</label>
                                    <label className="cash">R$ {s.cash1}</label>
                                </div>
                                <a href="#">Comprar</a>
                                <label className="desconto">Desconto</label>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}