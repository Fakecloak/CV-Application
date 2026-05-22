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
        <div className="experience">
        <Section
        title="Experience"
        handleSubmit={handleSubmit}
        submitted={submitted}
        handleEdit={handleEdit}

        displayData = {
            <div>
                <p>Company Name: {company}</p>
                <p>Position: {position}</p>
                <p>Main Responsibilities: {responsibilities}</p>
                <p>Duration of Work: {duration}</p>
            </div>
        }

        >
            <input type="text" placeholder="Google" value={company} onChange={(e) => setCompany(e.target.value)} />
            <br />
            <input type="text" placeholder="Frontend Developer" value={position} onChange={(e) => setPosition(e.target.value)} />
            <br />
            <textarea  name="responsibilities" placeholder="I build websites..." rows="4" value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)} />
            <br />
            <input type="text" placeholder="2022 - Present" value={duration} onChange={(e) => setDuration(e.target.value)} />



        </Section>
        </div>

    );

}