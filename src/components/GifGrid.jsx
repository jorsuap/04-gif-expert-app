import { GifCard } from "./GifCard";
import { useFecthGifs } from "../hooks/useFecthGifs";
import PropTypes from "prop-types";

export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFecthGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2>)
        }

        <div className="card-grid">
        {
            images.map( ( image ) => (
                <GifCard
                    key={ image.id } 
                    { ...image }
                />
            ))
        }
        </div>
    </>
  )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

