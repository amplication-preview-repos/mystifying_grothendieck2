/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { FriendUpdateManyWithoutFriendsInput } from "./FriendUpdateManyWithoutFriendsInput";
import { EnumFriendStatus } from "./EnumFriendStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FriendUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FriendWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FriendWhereUniqueInput)
  @IsOptional()
  @Field(() => FriendWhereUniqueInput, {
    nullable: true,
  })
  friend?: FriendWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FriendUpdateManyWithoutFriendsInput,
  })
  @ValidateNested()
  @Type(() => FriendUpdateManyWithoutFriendsInput)
  @IsOptional()
  @Field(() => FriendUpdateManyWithoutFriendsInput, {
    nullable: true,
  })
  friends?: FriendUpdateManyWithoutFriendsInput;

  @ApiProperty({
    required: false,
    enum: EnumFriendStatus,
  })
  @IsEnum(EnumFriendStatus)
  @IsOptional()
  @Field(() => EnumFriendStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { FriendUpdateInput as FriendUpdateInput };
