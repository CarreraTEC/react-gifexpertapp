import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = [] }) => {

    const [categories, setCategories] = useState(['Dogs']);
    // const [categories, setCategories] = useState(defaultCategories);

    const deleteCategory = category => {
        const newCategories = categories.filter(ctg => ctg !== category );
        setCategories(newCategories);
    }

    return (
        <>
          <h2 className="title">GifExpertApp 📱</h2>
          <AddCategory setCategories={setCategories}/>

          {
            categories.length 
            ?   <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                    key={category}
                                    category={category}
                                    deleteCategory={deleteCategory}
                            />
                        ))
                    }
                </ol>
            : <p className="text-nogifs">Search for something funny 😄</p>

          }
        </>
    )
};

