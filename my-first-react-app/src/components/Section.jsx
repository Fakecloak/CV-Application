
export default function Section(props) {
    return(
        <div className='section'>
            <h2>{props.title}</h2>

            {props.submitted === false ? (
                <form  onSubmit = {props.handleSubmit}>
                    {props.children}
                    <br />
                    <button type = 'submit' >Submit</button>
                </form>
            ) : (
                <div>
                    {props.displayData}
                    <br />
                    <button onClick = {props.handleEdit}>Edit</button>
                </div>
            )}

        </div>
    );
}