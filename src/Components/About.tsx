import aboutImage from "../assets/img-about.png"

export default function About(){
    return(
        <div className="container-about">
            <div>
                <img src={aboutImage} alt="logo-about" className="img-about" />
            </div>
            <div className="body-about">
                <h3>Sobre Nós</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a soluta eius hic similique numquam ipsa aliquam et aperiam qui. Corrupti a dicta autem nesciunt laudantium quisquam harum quibusdam aliquid.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, tenetur facere incidunt qui eveniet molestias ipsam fuga. Quas dolorem non placeat obcaecati quis magnam voluptas laboriosam eligendi, voluptates fuga. Nobis!
                </p>
                <a href="#">Faça Aqui!</a>
            </div>
        </div>
    )
}