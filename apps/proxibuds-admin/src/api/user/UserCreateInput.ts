import { FriendCreateNestedManyWithoutUsersInput } from "./FriendCreateNestedManyWithoutUsersInput";
import { LocationCreateNestedManyWithoutUsersInput } from "./LocationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  friends?: FriendCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  locations?: LocationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  uniqueUsername?: string | null;
  username: string;
};
