export interface JournalEntry {
    id: number,
    journalDate: Date,
    migraineNum: number;
    migraineStart: Date;
    migraineEnd?: Date;
    notes: string;
}