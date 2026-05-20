import { useState } from "react";

export default function Educational() {

    const [schoolName, setSchoolName] = useState('');
    const [study, setStudy] = useState('');
    const [year, setYear] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleEdit = () => {
        setSubmitted(false)
    }

    return (
        <Section  
        title="Education"
        submitted = {submitted}
        handleSubmit = {handleSubmit}
        handleEdit = {handleEdit}

        displayData = {
            <div>
                <p>school name: {schoolName}  </p>
                <p>studied: {study} </p>
                <p>year of passing: {year}</p>
            </div>
        }

        >
            <input type="text" placeholder="school name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            <br />
            <input type="text" placeholder="degree" value={study} onChange={(e) => setStudy(e.target.value)} />
            <br />
            <input type="year" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)} />
            

        </Section>
    )

}