import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory )) return;
        setcategories( cat=> [ newCategory, ...cat]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            
            { 
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                )) 
            }
        </>
    );
}