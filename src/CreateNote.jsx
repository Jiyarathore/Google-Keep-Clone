import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const CreateNote = (props) => {

    const [expand,setExpand]=useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        // const value=event.target.value;
        // const name= event.target.name;

        const { name, value } = event.target;//can also write this object destructing instead of above 2 lines

        //whatever user writes name or value we get it

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });

        console.log(note);
    };

    //we have stored first data in a state variable now we are changing that data by updating setNote data


    const addEvent = () => {
        props.passNote(note);

        setNote({
            title: "",
            content: "",
        });
    };

    const expandIt=()=>{
        setExpand(true);
    };

    return (
        <>
            <div className="main_note">
                <form>
               { expand?
                    <input
                        type="text"
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                    /> : null}

                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder="Take a note..."
                        onClick = {expandIt}
                        
                        >
                    </textarea>

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote