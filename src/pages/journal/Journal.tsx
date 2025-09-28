import type { JournalEntry } from "../../models/JournalEntry.Model.ts"
import JournalCard from "./JournalCard.tsx"

function Journal() {

    const journalList: JournalEntry[] = [{id: 1, journalDate: new Date(2025,8,1,6), migraineNum: 1, migraineStart: new Date(2025,8,1,2),weatherData: "",triggerData: [], notes: ""}];

    return <div>
        <h1>Journal</h1>
        <button>New Entry</button>
        <div> {journalList.map((journal)=> (
            <JournalCard journal={journal} key={journal.id}/>
        ))}</div>
    </div>
}

export default Journal;