import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Category {
  @Field((type) => ID)
  _id: string;

  @Field(() => String, {
    nullable: false,
    description: "This field provide a name for the category",
  })
  name: string;

  @Field({
    description: "This field provide a description for the category",
    nullable: true,
  })
  description?: string;
}
