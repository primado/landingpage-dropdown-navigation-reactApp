import React from "react";

// Images
import databiz from "../assets/client-databiz.svg"
import audiophile from "../assets/client-audiophile.svg"
import meet from "../assets/client-meet.svg"
import maker from "../assets/client-maker.svg"
import hero_image from "../assets/image-hero-desktop.png"


export default function Home() {

    return (
        <div>
            <main id="main">
                <section id="home">
                    <div className="container">
                        <div className="hero--container">
                            <h1>Make 
                                <div>remote work</div>
                            </h1>
                            <p className="hero--text">
                                Get your team in sync, no matter your location. <br /> Streamline processes, 
                                create team rituals, and <br /> watch productivity soar.
                            </p>

                            <div className="hero-call-action">
                                <a href="#">Learn More</a>
                            </div>

                            <div className="client-icons">
                                <img src={databiz} alt="cient databiz icon" className="" />
                                <img src={audiophile} alt="cient Audiophile icon" />
                                <img src={meet} alt="cient meet icon" />
                                <img src={maker} alt="cient maker icon" />
                            </div>

                        </div>

                        <div className="hero-image">
                            <img src={hero_image} alt="Hero image" />
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}