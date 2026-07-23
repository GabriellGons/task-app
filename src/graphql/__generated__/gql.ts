/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetTasks {\n    getTasks {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.GetTasksDocument,
    "\n  mutation CreateTask(\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    createTask(\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.CreateTaskDocument,
    "\n  mutation UpdateTask(\n    $id: ID!\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    updateTask(\n      id: $id\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": typeof types.UpdateTaskDocument,
};
const documents: Documents = {
    "\n  query GetTasks {\n    getTasks {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.GetTasksDocument,
    "\n  mutation CreateTask(\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    createTask(\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.CreateTaskDocument,
    "\n  mutation UpdateTask(\n    $id: ID!\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    updateTask(\n      id: $id\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.UpdateTaskDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetTasks {\n    getTasks {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetTasks {\n    getTasks {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTask(\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    createTask(\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTask(\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    createTask(\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTask(\n    $id: ID!\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    updateTask(\n      id: $id\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTask(\n    $id: ID!\n    $title: String!\n    $description: String\n    $startedAt: String\n    $endAt: String\n  ) {\n    updateTask(\n      id: $id\n      title: $title\n      description: $description\n      startedAt: $startedAt\n      endAt: $endAt\n    ) {\n      message\n      task {\n        id\n        title\n        description\n        isDone\n        userId\n        startedAt\n        endAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;