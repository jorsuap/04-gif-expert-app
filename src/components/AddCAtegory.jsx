
import { useState } from "react";
import PropTypes from "prop-types";

export const AddCAtegory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    };

    const onSubmit = ( event )=> {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

  return (
    <form onSubmit = { onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

// AddCAtegory.propTypes = {
//     onNewCategory: PropTypes.onNewCategory
// }


