import item1 from "../assets/services-1.png"
import item2 from "../assets/services-2.png"
import item3 from "../assets/services-3.png"
export default function Services(){

    const listItem = [
        {
            id: 1,
            title: "Alimentos Saudáveis",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: item1
        },
        {
            id: 2,
            title: "Master Chefs",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: item2
        },
        {
            id: 3,
            title: "Entrega Rápida",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            url: item3
        }
    ]

    return(
        <div className="container-service">

            <div className="title-service">
                <h2><span>Nossos</span> Serviços</h2>
                <label>Lorem ipsum dolor sit, amet consectetur adipisicing elit</label>
                <label>Velit commodi quo possimus est quos blanditiis delectus harum doloribus.</label>
            </div>

            <div className="service-item">
                {
                    listItem.map((item) => {
                        return(
                            <div key={item.id} className="item-service">
                                <img src={item.url} />
                                <h3>{item.title}</h3>
                                <label>{item.text}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}