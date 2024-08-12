import { FriendUpdateManyWithoutUsersInput } from "./FriendUpdateManyWithoutUsersInput";
import { LocationUpdateManyWithoutUsersInput } from "./LocationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  friends?: FriendUpdateManyWithoutUsersInput;
  lastName?: string | null;
  locations?: LocationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  uniqueUsername?: string | null;
  username?: string;
};
