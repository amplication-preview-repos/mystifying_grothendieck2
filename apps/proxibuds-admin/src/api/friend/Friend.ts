import { User } from "../user/User";

export type Friend = {
  createdAt: Date;
  friend?: Friend | null;
  friends?: Array<Friend>;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
