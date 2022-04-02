import React, { useState } from "react";

export default function Form() {

    const getRandomElement = function (data_array) {
        const arrayLength = data_array.length
        const randNumber = Math.floor(Math.random() * arrayLength)
        return (data_array[randNumber])
    } 

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMemeData => {
            return {
                ...prevMemeData,
                [name]: value
            }
        })
    }

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    const getMemeImage =  () => {
        const url = getRandomElement(allMemes).url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    return (
        <div className="form">
            <div className="input--grp">
                <input onChange={handleChange} className="input" type={'text'} value={meme.topText} name="topText" />
                <input onChange={handleChange} className="input" type={'text'} value={meme.bottomText} name="bottomText" />
            </div>
            <button onClick={getMemeImage} className="btn">Get a new meme image</button>
            <div className="meme">
                <img className="meme--img" src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}