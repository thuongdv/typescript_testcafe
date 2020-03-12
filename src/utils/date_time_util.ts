import moment from "moment";

export class DateTimeUtil {
    public static current(format: string): string {
       return moment().format(format);
    }
}