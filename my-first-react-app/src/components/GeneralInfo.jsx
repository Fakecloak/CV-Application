import Section from "./Section";
import { useState } from "react";

export default function GeneralInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setSubmitted(true);
    }

    function handleEdit() {
        setSubmitted(false);
    }

    return(
        <Section 
        title="General Information"
        displayData = {
            <div>
                <p>name: {name}</p>
                <p>email: {email}</p>
                <p>phone: {phone}</p>
            </div>
        }
        handleSubmit = {handleSubmit}
        handleEdit = {handleEdit}
        submitted = {submitted}

        >

            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />



        </Section>
    );
}