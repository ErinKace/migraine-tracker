import type { JournalEntry } from "./JournalEntry.Model"

function JournalEntry(props: {journal: JournalEntry}) {
    let entry: JournalEntry = props.journal;

    return <div className="Journal-Details">
        <h2>Journal Entry for {entry.journalDate.toDateString()}</h2>
        <h3>Started</h3>
        <p>{entry.notes}</p>
    </div>
}

export default JournalEntry