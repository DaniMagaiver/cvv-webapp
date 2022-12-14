export interface IUser {
  _id: string;
  name: string;
  birthDay: string;
  email: string;
  uf: string;
  city: string;
  telephone: string;
  status: "active" | "inactive";
  type: "volunteer" | "admin";
  isApproved: boolean;
}
