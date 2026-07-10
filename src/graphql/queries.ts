// src/graphql/queries.ts
import { gql } from "@apollo/client";
import { graphql } from "./gql";

// export const GET_TASK = gql`
//   query {
//     getTasks {
//       message
//       task {
//         id
//         title
//         description
//         isDone
//         startedAt
//         endAt
//         createdAt
//         updatedAt
//       }
//     }
//   }
// `;

export const GET_TASK = graphql(`
  query GetTasks {
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
`);

// Anda bisa menambahkan query lain di bawah ini, contoh:
// export const GET_TASKS = gql` ... `;
