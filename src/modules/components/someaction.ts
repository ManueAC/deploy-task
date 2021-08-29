import { TaskType, UserType } from "./types";
import { TASKS_LIST_QRY, USER_LIST_QR } from "../queries/index";
import { client } from "../../shared/api/index";
import {
  TASK_STATUS_MUT,
  TASK_UPDATE_MUT,
} from "../mutations";


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