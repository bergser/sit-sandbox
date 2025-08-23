import { ConsolaInstance } from "consola";
import { UserRepository } from "../service";

declare module "h3" {
  interface H3EventContext {
    log: ConsolaInstance;
    users: UserRepository;
  }
}
