import { nanoid } from "nanoid";

class Course {
  constructor(id, { name, category, price, language, email, stack, teachingAssistant }) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.language = language;
    this.price = price;
    this.email = email;
    this.stack = stack;
    this.teachingAssistant = teachingAssistant
  }
}

const courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseHolder[id])
  },
  createCourse: ({ input }) => {
    const id = nanoid();
    courseHolder[id] = input;
    return new Course(id, input);
  }
};

export default resolvers;