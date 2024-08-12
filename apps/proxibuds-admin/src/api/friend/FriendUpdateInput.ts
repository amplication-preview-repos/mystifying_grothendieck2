import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendUpdateManyWithoutFriendsInput } from "./FriendUpdateManyWithoutFriendsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendUpdateInput = {
  friend?: FriendWhereUniqueInput | null;
  friends?: FriendUpdateManyWithoutFriendsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
