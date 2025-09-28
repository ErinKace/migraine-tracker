function JournalForm() {

    function handleSubmit() {}

    return <>
    <form onSubmit={handleSubmit}>
        <input 
        type="date"
        className="startDate"/>
        <input 
        type="date"
        className="endDate"/>
        <input 
        type="text"
        className="notes"/>
        <button type="submit">Submit</button>
    </form>
    </>
}

export default JournalForm;