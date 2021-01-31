export class Student {
    constructor(firstName, lastName, iNumber){
        this.Id = Date.now(),
        this.FirstName = firstName,
        this.LastName = lastName,
        this.INumber = iNumber
    }
}