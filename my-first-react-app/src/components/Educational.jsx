import { useState } from "react";
import Section from "./Section";

export default function Educational() {

    const [schoolName, setSchoolName] = useState('');
    const [study, setStudy] = useState('');
    const [year, setYear] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleEdit = (e) => {
        setSubmitted(false)
    }

    return (
        <Section  className="educational"
        title="Education"
        submitted = {submitted}
        handleSubmit = {handleSubmit}
        handleEdit = {handleEdit}

        displayData = {
            <div>
                <p>College Name: {schoolName}  </p>
                <p>Degree: {study} </p>
                <p>Year of Passing: {year}</p>
            </div>
        }

        >
            <input type="text" placeholder="college name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            <br />
            <input type="text" placeholder="degree" value={study} onChange={(e) => setStudy(e.target.value)} />
            <br />
            <input type="date" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} />
            

        </Section>
    );

}