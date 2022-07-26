import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

const App=()=>{

    const [addItem,setAddItem]=useState([]);

const addNote=(note)=>{

    setAddItem((prevData)=>{
        return [...prevData, note];
    });
console.log(note);

};

const onDelete=(id)=>{
setAddItem((olddata)=>
olddata.filter((currdata, index)=>{
    return index!==id;

    //it will return all the notes which does not match to this id
    //those notes without index id will only be seen
})
);
};

    return(
        <>
        <Header/>
        <CreateNote passNote={addNote}/>
        
        {
            addItem.map((val, index)=>{
                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                );
            })
        }
        <Footer/>
        </>
    )
};

export default App;