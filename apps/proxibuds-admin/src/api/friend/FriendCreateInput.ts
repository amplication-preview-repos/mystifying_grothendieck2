import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendCreateNestedManyWithoutFriendsInput } from "./FriendCreateNestedManyWithoutFriendsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendCreateInput = {
  friend?: FriendWhereUniqueInput | null;
  friends?: FriendCreateNestedManyWithoutFriendsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
