import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function Home() {
    const base_url = "https://localhost:7114/api/";

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get(base_url + 'category')
            .then((res) => setCategories(res.data))
    }, []);

  return (
    <>
       <div className="text-center text-3xl">Home</div>
       <div>

        {categories.map((category) => (
            <div className="my-6" key={uuidv4()}>
                <span>{category.id}. </span>
                <span>{category.name}</span>
            </div>
        ))}

       </div> 
    </>
  )
}

export default Home