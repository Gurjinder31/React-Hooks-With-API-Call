import React, {useState} from 'react';

import ResourceList from './ResourceList';

const App = () =>{
   const [resource, setResource] = useState('posts');
  return (
    <div className="App">
      <div className="text-center mt-3">
      <button className="btn btn-danger mr-1" onClick={()=> setResource("posts")}>posts</button>
      <button className="btn btn-primary" onClick={()=> setResource("todos")}>todos</button>
      </div>
      <div className="text-center mt-4">
        <ResourceList resource={resource} />
      </div>
    </div>
  
  );
}

export default App;
