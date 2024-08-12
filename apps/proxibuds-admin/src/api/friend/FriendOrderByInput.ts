import { SortOrder } from "../../util/SortOrder";

export type FriendOrderByInput = {
  createdAt?: SortOrder;
  friendId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
