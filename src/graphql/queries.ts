// src/graphql/queries.ts
import { gql } from "@apollo/client";
import { graphql } from "./__generated__/gql";

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

export const CREATE_TASK = graphql(`
  mutation CreateTask(
    $title: String!
    $description: String
    $startedAt: String
    $endAt: String
  ) {
    createTask(
      title: $title
      description: $description
      startedAt: $startedAt
      endAt: $endAt
    ) {
      message
      task {
        id
        title
        description
        isDone
        userId
        startedAt
        endAt
        createdAt
        updatedAt
      }
    }
  }
`);

export const UPDATE_TASK = graphql(`
  mutation UpdateTask(
    $id: ID!
    $title: String!
    $description: String
    $startedAt: String
    $endAt: String
  ) {
    updateTask(
      id: $id
      title: $title
      description: $description
      startedAt: $startedAt
      endAt: $endAt
    ) {
      message
      task {
        id
        title
        description
        isDone
        userId
        startedAt
        endAt
        createdAt
        updatedAt
      }
    }
  }
`);

export const DELETE_TASK = graphql(`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      message
      task {
        id
        title
        description
        isDone
        userId
        startedAt
        endAt
        createdAt
        updatedAt
      }
    }
  }
`);

export const TOGGLE_TASK_COMPLETION = graphql(`
  mutation ToggleTaskCompletion($id: ID!) {
    toggleTaskCompletion(id: $id) {
      message
      task {
        id
        title
        description
        isDone
        userId
        startedAt
        endAt
        createdAt
        updatedAt
      }
    }
  }
`);
