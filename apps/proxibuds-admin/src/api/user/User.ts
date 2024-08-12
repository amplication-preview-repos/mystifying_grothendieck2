import { Friend } from "../friend/Friend";
import { Location } from "../location/Location";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  friends?: Array<Friend>;
  id: string;
  lastName: string | null;
  locations?: Array<Location>;
  roles: JsonValue;
  uniqueUsername: string | null;
  updatedAt: Date;
  username: string;
};
