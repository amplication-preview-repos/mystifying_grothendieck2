import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FriendListRelationFilter } from "../friend/FriendListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  friends?: FriendListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  locations?: LocationListRelationFilter;
  uniqueUsername?: StringNullableFilter;
  username?: StringFilter;
};
