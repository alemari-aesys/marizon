import { useState, useEffect } from "react";

const useOnClickOutside = () => {

    
    const [click, setClick] = useState(false);
    const [x, setX] = useState();
    const [y, setY] = useState();

    return click;
}

export default useOnClickOutside;