import React, {useState, useEffect} from 'react';
import axios from 'axios';

 const ResourceList = ({resource}) =>{
    const [resources, setResources] = useState([]);

    // use effect is using for both componentdidmount or didupdate
    // second argument as array used for not call again and again after fetching data
    // second paramet (resource) is used to call function
    useEffect(
        () => {
        (async(resource)=>{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources(response.data);
        })(resource);  
    }, [resource]);

   
        return(
            <div>
                
                    <ul className="list-group">
                        {resources.map((list)=>(
                             <li className="list-group-item" key={list.id}>{list.title}</li>     
                        ))
                        }
                    </ul>
                
               
            </div>
        )
    };

export default ResourceList;