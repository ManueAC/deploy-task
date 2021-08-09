import { TaskType, UserType } from "./types";
import { TASKS_LIST_QRY, USER_LIST_QR } from "../queries/index";
import { client } from "../../shared/api/index";
import { TASK_CREATE_MUT, TASK_STATUS_MUT, TASK_UPDATE_MUT } from "../mutations";

export const getTaskAction = async (
  callback: (data: TaskType[]) => void
): Promise<void> => {
  try {
    const { data } = await client.query({
      query: TASKS_LIST_QRY,
    });
    console.log(data);
    callback(data.tasksList.items);
  } catch (err) {
    console.log(err);
  }
};

export const createTaskAction = async (
  input: TaskType,
  callback: () => void
): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_CREATE_MUT,
      variables: {
        input,
      },
    });
    console.log(data);
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const updateTaskAction = async (
  inputData: TaskType,
  filter: string
): Promise<void> => {
  const { taskTitle, taskUser, taskDscr, taskCheck, taskStart, taskEnd } =
    inputData;
  try {
    const { data } = await client.mutate({
      mutation: TASK_UPDATE_MUT,
      variables: {
        inputData: {
          taskTitle,
          taskUser,
          taskDscr,
          taskCheck,
          taskStart,
          taskEnd,
        },
        filter: {
          id: filter,
        },
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskAction = async (id: string): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_CREATE_MUT,
      variables: {
        id,
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

export const statusTaskAction = async (
  id: string,
  status: boolean,
  obtenerTareas: () => void
): Promise<void> => {
  try {
    const { data } = await client.mutate({
      mutation: TASK_STATUS_MUT,
      variables: {
        filter: {
          id: {
            equals: id,
          },
        },
        status: {
          taskCheck: {
            set: status,
          },
        },
      },
    });
    console.log(data);
    obtenerTareas();
  } catch (err) {
    console.log(err);
  }
};

// Users

export const getUsersAction = async (
  callback: (data: UserType[]) => void
): Promise<void> => {
  try {
    const { data } = await client.query({
      query: USER_LIST_QR,
    });
    console.log(data);
    callback(data.usersList.items);
  } catch (err) {
    console.log(err);
  }
};