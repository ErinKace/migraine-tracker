import type { JournalEntry } from "./JournalEntry.Model";

function JournalCard(props: {journal: JournalEntry}) {

    function goToDetails() {

    }

    let entry = props.journal;

    return <div onClick={goToDetails}>
        <h3>{entry.journalDate.getDate()}</h3>
    </div>
}