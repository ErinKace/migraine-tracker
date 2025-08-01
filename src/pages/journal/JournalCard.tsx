import type { JournalEntry } from "./JournalEntry.Model";

function JournalCard(props: {journal: JournalEntry}) {

    function goToDetails() {

    }

    let entry = props.journal;

    return <div onClick={goToDetails}>
        <h3>{entry.migraineNum}</h3>
        <h3>{entry.migraineStart.toDateString()}</h3>
    </div>
}

export default JournalCard;