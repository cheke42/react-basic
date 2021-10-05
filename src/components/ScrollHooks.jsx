import React, {useState, useEffect} from 'react';

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0)
    /** Realizando fase de update y unmont */
    useEffect(() => {
        console.log("Moviendo el scroll")
        const  detectarScroll = () => setScrollY(window.pageYOffset)

        window.addEventListener('scroll',detectarScroll)
        /** A traves del return se listan las operaciones a realizar cuando se desmonte el componente */
        return () => window.removeEventListener('scroll',detectarScroll)
    },
    /** Se actualiza el componente cuando se modifican las variables especificadas. En este Ej: scrollY */
    [scrollY])

    /** Realizando fase de montaje */
    useEffect(() => {
        console.log("Fase de Montaje")
    },[])
    
    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}
