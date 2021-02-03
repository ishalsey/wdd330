export class ToDo {
    constructor(input, date) {
        this.Id = Date.now(),
        this.input = input,
        this.date = date,
        this.Completed = false
    }
}