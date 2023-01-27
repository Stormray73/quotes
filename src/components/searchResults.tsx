import { useState, useEffect } from "react";
import { Quote } from "./Quote";

interface SearchProps{
    quotes: Quote[],
    count: number
}

export const SearchResults = (props: SearchProps) => {
    return (
        <div>
            <div className="stuff-box">
                Found {props.count} Results
            </div>
            {props.quotes.map((quote) => (
                <div className="purple stuff-box" key={quote._id} >
                    <div>
                        {quote.content}
                    </div>
                    <div>
                        --{quote.author}
                    </div>
                </div>
            ))}
        </div>
    )
}