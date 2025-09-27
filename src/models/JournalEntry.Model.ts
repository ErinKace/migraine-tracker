export interface JournalEntry {
    id: number,
    journalDate: Date,
    migraineNum: number;
    migraineStart: Date;
    migraineEnd?: Date;
    weatherData: string;
    triggerData: TriggerData[];
    notes: string;
}
// Trigger Data is meant to be used to track additional triggers outside of weather like food, stress, tight headwear, etc.

export interface TriggerData {
    id: number;
    triggerType: string;
    triggerName: string;
    triggerOccured: boolean;
}