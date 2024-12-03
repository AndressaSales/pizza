import pizzaFrango from "../assets/pizza_frango.jpeg"
import pizzaMussarela from "../assets/pizza_mussarela.jpeg"
import pizzaCalabresa from "../assets/pizza_calabresa.jpeg"
import ppizzaCamarao from "../assets/pizza_camarao.jpeg"
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function traditionalPizza(){

    const traditional = [
        {
            id: 1,
            title: "Pizza de Frango",
            url: pizzaFrango,
            text: "Lorem ipsum dolor sit.",
            cash1: 34.90,
            cash2: 35.90
        },
        {
            id: 2,
            title: "Pizza de Camarão",
            url: ppizzaCamarao,
            text: "Lorem ipsum dolor sit.",
            cash1: 36.90,
            cash2: 37.90
        },
        {
            id: 3,
            title: "Pizza de Mussarela",
            url: pizzaMussarela,
            text: "Lorem ipsum dolor sit.",
            cash1: 28.90,
            cash2: 29.90
        },
        {
            id: 4,
            title: "Pizza de Calabresa",
            url: pizzaCalabresa,
            text: "Lorem ipsum dolor sit.",
            cash1: 27.90,
            cash2: 28.90
        }
    ]

    return(
        <div className="container-menu">
                {
                    traditional.map((t) => {
                        return(
                            <div key={t.id} className="card-menu">
                                <div className="card-img">
                                    <img src={t.url} />
                                </div>

                                <div className="body-card">
                                    <h4 className="title">{t.title}</h4>
                                    <p className="text">{t.text}</p>
                                    <div >
                                        <FaStar color="orange" />
                                        <FaStar color="orange" />
                                        <FaStar color="orange" />
                                        <FaStar color="orange" />
                                        <FaStarHalf color="orange" />
                                    </div>
                                    <div className="cash-menu">
                                        <label className="dcash">R$ {t.cash2}</label>
                                        <label className="cash">R$ {t.cash1}</label>
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