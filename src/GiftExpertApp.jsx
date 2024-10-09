import { useState } from "react";
import { AddCAtegory, GifGrid } from "./components/";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories])
        }
    };

    return( 
        <>
            <h1>GiftExpertApp</h1>
            <AddCAtegory 
                onNewCategory={ onAddCategory }
            />
            { categories.map( ( category )  => 
                (
                    <GifGrid category={ category } key={ category }/>
                ))
            }
        </>
    )
}