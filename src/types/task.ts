import { GetTasksQuery } from "@/graphql/__generated__/graphql";

export type Task = NonNullable<
  NonNullable<GetTasksQuery["getTasks"]>["task"]
>[number];
