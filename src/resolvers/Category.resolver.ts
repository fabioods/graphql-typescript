import { Query, Resolver } from "type-graphql";
import CategorySchema from "../model/Category.schema";
import Category from "../typedefs/Category.typedef";

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    const categories = await CategorySchema.find();
    return categories;
  }
}

export default CategoryResolver;
