import "reflect-metadata";
import "./utils/connect";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import CategoryResolver from "./resolvers/Category.resolver";

const bootstrap = async () => {
  const schema = await buildSchema({ resolvers: [CategoryResolver] });
  const apollo = new ApolloServer({ schema });

  apollo.listen({ port: 7000 }, () => console.log("Running on port 7000"));
};

bootstrap();
