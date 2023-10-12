import Home from "./Home";
import "./index.css";

const App=()=>{
    
    return(
        <>
        <div className="forheading">
        <h1 className="forcenter">Learning Props</h1>
      </div>
      <hr className="firsthr" />
        <Home
        ime="https://picsum.photos/id/1/400/300"
        title="React js"
        para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"
        title2="Node js"
        ime2="https://picsum.photos/id/7/400/300"
        para2=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"
        title3="Mongodb"
        ime3="https://picsum.photos/id/3/400/300"
        para3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"

        />
        <Home
        ime="https://picsum.photos/id/48/400/300"
        title="JavaScript"
        para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"
        title2="Angular js"
        ime2="https://picsum.photos/id/60/400/300"
        para2=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"
        title3="Firebase"
        ime3="https://picsum.photos/id/3/400/300"
        para3="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
        eos!"

        />
        
        </>
    )
}

export default App;