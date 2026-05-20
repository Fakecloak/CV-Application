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
            <input type="text" placeholder="school name"></input>
            <input type="text" placeholder="degree"></input>
            <input type="year" placeholder="year"></input>

            

        </Section>
    )

}