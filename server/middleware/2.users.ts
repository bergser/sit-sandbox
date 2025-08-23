import { UserRepository } from "../../service";

export default defineEventHandler((event) => {
  event.context.users = new UserRepository({ log: event.context.log });
});
