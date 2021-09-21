import { useState, useCallback, useEffect } from "react";
import { article } from "../db";

const TilesSection = () => {
    const IMAGES_TO_DISPLAY = 9;
    const [imagesArray, setImagesArray] = useState<string[]>([]);
   
    const pick = useCallback(() => {
        setImagesArray(shuffleArray(article.map(_ => _.image), IMAGES_TO_DISPLAY));
    }, [])

    useEffect(() => {
        pick();
    }, [pick])
    
    const shuffleArray = (array: Array<string>, length: number): Array<string> => {
        const shuffled = new Set<string>();
        while(shuffled.size < length) {
            shuffled.add(array[Math.floor(Math.random() * (length) + 10)]);
        }
        return Array.from(shuffled);
    }
    

    return (
        <div className="productContainer">
            <div className="row">
                {
                    imagesArray?.map(imageSource => (<img className="tile" width="200px" height="200px" src={imageSource} alt=""></img>))
                }
            </div>
        </div>
    );
}

export default TilesSection;