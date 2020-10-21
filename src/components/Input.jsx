import React, {useState, useEffect} from 'react';
import "../config.js"
import firebase from "firebase";


function Input() {
    const [disp, setDisp] = useState(0);
    
    const db = firebase.database().ref("test");

    useEffect(() => {
        db.on('value', function(snapshot) {
            const numb = snapshot.val()['num'];
            setDisp(numb);
        });
    })
    
    function increment() {
        db.set({
            num: disp + 1
        })
    }
    function dMode() {
        
    }

    return(
        <div>
        <div className="Card">
            <h1>{disp}</h1>
            <button 
                className="inc bxlg scale" 
                onClick={increment}>Increment</button>
        </div>
        </div>
    )
}

export default Input;