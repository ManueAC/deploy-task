import gql from "graphql-tag";

//  8base Queries

export const TASKS_LIST_QRY = gql`
  query tasksList {
    tasksList {
      items {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const TASK_INFO_QRY = gql`
  query taskInfo($id: ID) {
    taskInfo(id: $id) {
      item {
        id
        taskTitle
        taskUser
        taskDscr
        taskCheck
        taskEnd
        taskStart
      }
    }
  }
`;

export const USER_LIST_QR = gql`
  query usersList {
    usersList {
      items {
        id
        email
        status
        firstName
      }
    }
  }
`;
