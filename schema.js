import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Course {
    id: ID
    name: String
    category: String
    price: Int
    language: String
    stack: Stack
    email: String
    teachingAssistants: [TeachingAssistant]
  }

  type TeachingAssistant {
    firstName: String
    lastName: String
    experience: Int
  }

  enum Stack {
    WEB
    MOBILE
    OTHER
  }

  type Query {
    getCourse(id: ID): Course
  }

  input CourseInput {
    id: ID
    name: String!
    category: String
    price: Int!
    language: String
    stack: Stack
    email: String
    teachingAssistants: [TeachingAssistantInput]!
  }

  input TeachingAssistantInput {
    firstName: String
    lastName: String
    experience: Int
  }

  type Mutation {
    createCourse(input: CourseInput): Course
  }
`);

export default schema;