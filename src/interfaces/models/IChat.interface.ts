export interface IChat{
    _id:string;
    roomId:string;
    volunteerId: string;
    createdAt: Date;
    status: "open" | "inAttendance" | "close";
}