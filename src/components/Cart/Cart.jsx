import React, { createContext, useEffect, useRef, useState } from "react";
import Section from "./Section";
import Items from "./Items";
import Checkout from "./Checkout";
import ScrollUp from "../ScrollUp";

export const CountContext = createContext(null)
export const FullPriceContext = createContext(null)

const Cart = () => {
    const [itemCount, setItemCount] = useState(0)
    let [result, setResult] = useState(0)
    let lengthRef = useRef(null)
    
    useEffect(() => {
        setItemCount(lengthRef.current.childElementCount)

        let item = document.querySelectorAll('.item > div > p > span')
        for (let i = 0; i < item.length; i++) {
            setResult(result += +item[i].textContent)
        }
    }, [])

    return (
        <>
        <ScrollUp />
        <CountContext.Provider value={itemCount}>
            <FullPriceContext.Provider value={result}>
                <Section />
                <Items refer={lengthRef} setCount={setItemCount} setPrice={setResult} 
                    item={document.querySelectorAll('.item > div > p > span')} />
                <Checkout />
            </FullPriceContext.Provider>
        </CountContext.Provider>
        </>
    )
}

export default Cart