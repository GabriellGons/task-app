import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  schema: [
    {
      "https://task-app-be-mern.vercel.app/graphql": {
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
        },
      },
    },
  ],
  documents: ["src/graphql/queries.ts"],
  ignoreNoDocuments: false,
  generates: {
    "./src/graphql/__generated__/": {
      preset: "client",
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
