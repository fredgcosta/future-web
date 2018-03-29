export const typeDefs = `
scalar DateTime

type Query {
  tasks: [Task]
  task(_id: ID!): Task
  loggedUser: User
}

input AddTaskInput {
  _id: ID
  description: String!
  details: String
  done: Boolean
  dueDate: DateTime
}

input EditProfileInput {
  _id: ID
  name: String!
  email: String
}


type Mutation {
  addTask(task: AddTaskInput!): Task
  editProfile(user: EditProfileInput!): User
  flipTask(_id: ID!): Task
  removeTask(_id: ID!): Task
  removeCheckedTasks: Task
}

type Task {
  _id: ID!
  description: String!
  details: String
  done: Boolean 
  dueDate: DateTime
}

type User {
  _id: ID!
  email: String!
  name: String
}
`;