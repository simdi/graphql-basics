import { buildSchema } from "graphql";

export default buildSchema(`
  type Course {
    id: ID
    name: String
    category: String
    price: String
    language: String
    email: String
    teachingAssistants: [TeachingAssistants]
  }
`);