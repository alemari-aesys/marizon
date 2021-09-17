import { useState, useCallback } from "react";
import { article } from "../db";

const TilesSection = () => {

    const [indexArray, setIndexArray] = useState<number[]>([]);

    const pick = useCallback((): number => {
        let found = false;
        let foundIndex = 0;
        while (!found) {
            console.log('====================================');
            let index = Math.floor(Math.random() * 30);
            // eslint-disable-next-line no-loop-func
            if (!indexArray.includes(index)) {
                found = true;
                foundIndex = index;
                break;
            } else {
                setIndexArray((prevValue) => {
                    return [...prevValue, index]
                })
            }
            break;
        }
        return foundIndex;
    }, [indexArray])

    return (
        <div className="productContainer">
            <div className="row">
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
                <img width="200px" height="200px" src={article[pick()].image} alt="" />
            </div>
        </div>
    );
}

export default TilesSection;