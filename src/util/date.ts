
export default class FormatDate {
    static time = new Date().toLocaleDateString()
    constructor(time?: number) {
        FormatDate.time = time ? new Date(time).toLocaleDateString() : new Date().toLocaleDateString()
    }
}