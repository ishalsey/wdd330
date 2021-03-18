export class Comment {
    constructor(hikeId, comment) {
        this.HikeId = hikeId,
        this.CommentId = Date.now,
        this.Date = Date(),
        this.Comment = comment
    }
}