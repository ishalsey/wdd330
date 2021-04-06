export class Event {
    constructor(eventText, eventDate){
        this.EventId = Date.now(),
        this.EventText = eventText,
        this.EventDate = eventDate
    }
}