import React,{useState} from "react";

const PasswordStrength=()=>{
    const[password,setPassword]=useState("");
    const[strength,setStrength]=useState("");

    const evaluateStrength=(password)=>{
        if(!password) return "";
        if(password.length<6) return "Weak password";
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) return "Strong password";
        return "Moderate password";
    }

    const handleChange=(event)=>{
        const pwd=event.target.value;
        setPassword(pwd);
        setStrength(evaluateStrength(pwd));
    }

    return(
        <div className="container">
            <center>
                <h1>Password Strength Checker</h1>
                <input type="password" placeholder="Enter your Password" onChange={handleChange}/>
                <h5>{strength}</h5>
            </center>
        </div>
    )
}
export default PasswordStrength;

