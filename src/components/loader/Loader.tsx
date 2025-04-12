import {FC, useEffect, useState} from "react";
import {ILoader} from "../../shared/types/loader.ts";

const Loader:FC<ILoader> = ({ isLoading }) => {
    const [debaunceIsLoading, setDebaunceIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if(!isLoading) {
            const interval = setInterval(() => {
                setDebaunceIsLoading(false)
            }, 700)

            return () => clearInterval(interval)
        }
        setDebaunceIsLoading(isLoading)


    }, [isLoading])

    if(!debaunceIsLoading) return <></>

    return (
        <div className="droid">
            <div className="radios">
                <div className="radio short"></div>
                <div className="radio long"></div>
            </div>
            <div className="head">
                <div className="band one"></div>
                <div className="band two"></div>
                <div className="eyes">
                    <div className="eye one"></div>
                    <div className="eye two"></div>
                </div>
                <div className="band three"></div>
            </div>
            <div className="body">
                <div className="lines one"></div>
                <div className="lines two"></div>
                <div className="circle one"></div>
                <div className="circle two"></div>
                <div className="circle three"></div>
            </div>
        </div>
    );
};

export default Loader;