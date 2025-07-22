import type { JournalEntry } from "./JournalEntry.Model"

function JournalEntry(props: {journal: JournalEntry}) {
    let entry: JournalEntry = props.journal;

    return <div className="Journal-Details">
        <h1>Journal Entry for {entry.journalDate.toDateString()}</h1>
    </div>
}

export default JournalEntry