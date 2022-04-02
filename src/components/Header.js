import React from "react"
export default function Header() {
    return (
        <header className="header">
            <div className="brand">
                <img src="images/brand_logo.png" className="brand--logo"/>
                <h2 className="brand--name">Meme Generator</h2>
            </div>
            <h4 className="project--name">React Course - Project 3</h4>
        </header>
    )
}