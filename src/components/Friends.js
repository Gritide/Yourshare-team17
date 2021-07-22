import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";

function AddItem(props){
    const [friend, setFriend] = useState("");
    return(
        <form>
            <input
            type="text"
            placeholder="Name"
            onChange={event=>{setFriend(event)}}
            />
            <button>
                Add
            </button>
        </form>
    )
}