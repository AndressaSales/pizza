import chef1 from "../assets/chef-1.jpeg"
import chef2 from "../assets/chef-2.jpeg"
import chef3 from "../assets/chef-3.jpeg"

export default function Chefs(){

    const chefs = [
        {
            id: 1,
            name: "Chef Alex Rider",
            url: chef1,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sunt!"
        },
        {
            id: 2,
            name: "Chef Manoella Silva",
            url: chef2,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sunt!"
        },
        {
            id: 3,
            name: "Maxson Silva",
            url: chef3,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sunt!"
        }
    ]

    return(
        <div className="chef">
            <div className="container-chef">
                {
                    chefs.map((chef)=> {
                        return(
                            <div key={chef.id} className="card-chef">

                                <div className="chef-img">
                                    <img src={chef.url}/>
                                </div>
                                
                                <div className="chef-body">
                                    <h3>{chef.name}</h3>
                                    <p>{chef.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}