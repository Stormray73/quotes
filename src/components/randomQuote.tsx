import { ReactNode, useEffect, useState } from "react";
import { Quote } from "./Quote";

interface QuoteProps {
    author: string,
    content: string
}

export const RandomQuote = (props: QuoteProps) => {
    
    return(
        <div className="light-blue stuff-box">
            <div>
                {props.content}
            </div>
            <div>
                -- {props.author} --
            </div>
        </div>
    )
}