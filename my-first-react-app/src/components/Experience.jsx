import { useState } from "react";
import Section from "./Section";

export default function Experience() {

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [duration, setDuration] = useState("");

    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    function handleEdit() {
        setSubmitted(false);
    }

    return (
        <Section
        title="Experience"
        handleSubmit={handleSubmit}
        submitted={submitted}
        handleEdit={handleEdit}

        displayData = {
            <div>
                <p>company name: {company}</p>
                <p>position: {position}</p>
                <p>Main Responsibilities: {responsibilities}</p>
                <p>Duration of Work: {duration}</p>
            </div>
        }
        >
            <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
            <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
            <textarea  placeholder="I build websites..." value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
            <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />



        </Section>

    )

}