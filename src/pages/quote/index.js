import React from "react";
import "./css/index.css"
import { useEffect } from "react";
import { useState } from "react";

const Quote = () => {

    const [quote, setQuote] = useState("")
    const [loading, setLoading] = useState(true);

    const requestData = async () => {
        const req = await fetch("https://api.quotable.io/random");
        const data = await req.json();
        setQuote(data);
        setLoading(false)
    }

    useEffect(() => {

        requestData();
    }, [])

    const handleClick = () => {
        requestData()
    }

    if (loading) {
        return (<p></p>)
    }

    if (!loading) {
        return (

            <div className="container">
                <div className="title">
                    <p>My Quote Generator</p>
                </div>
                <div className="quote_card">
                    <div className="quote">
                        <p>{quote.content}</p>
                        <p id="author">- {quote.author}</p>
                    </div>
                    <button onClick={() => handleClick()}>New Quote</button>
                </div>

                <div className="footer">
                    Victor Escalona
            </div>
            </div>
        )
    }
}

export default Quote;