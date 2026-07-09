// src/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_TASK = gql`
  query GetTasksQuery {
    getTasks {
      message
      task {
        id
        title
        description
        isDone
        startedAt
        endAt
        createdAt
        updatedAt
      }
    }
  }
`;

// Anda bisa menambahkan query lain di bawah ini, contoh:
// export const GET_TASKS = gql` ... `;
