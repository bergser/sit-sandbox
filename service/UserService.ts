import { de, Faker } from "@faker-js/faker";
import type { ConsolaInstance } from "consola";
import type { User } from "./../types/user";

export class UserRepository {
  private _log: ConsolaInstance;
  private _db: User[] = [];
  private _faker = new Faker({ locale: de });

  public constructor(props: { log: ConsolaInstance }) {
    this._log = props.log.withTag("UserRepository");
    this._log.debug(props, "Connecting...");
    this._fillWithRandom();
  }

  public async getByName(searchString: string) {
    this._log.debug({ searchString }, "getByName");

    const res = this._db.filter(({ firstName, lastName }) => {
      const str = searchString.toLowerCase();
      return (
        firstName.toLowerCase().startsWith(str) ||
        lastName.toLowerCase().startsWith(str)
      );
    });
    this._log.info(`Found ${res.length} items`);
    return res;
  }

  private readonly _fillWithRandom = () => {
    this._log.debug("_fillWithRandom");
    this._db = this._faker.helpers.multiple(this._generateUser, {
      count: 2500,
    });
    this._log.success("successfull");
  };

  private readonly _generateUser = (): User => {
    const sex = this._faker.person.sex() as "male" | "female";
    const firstName = this._faker.person.firstName(sex);
    const lastName = this._faker.person.lastName(sex);
    const fullName = this._faker.person.fullName({ firstName, lastName, sex });
    return {
      userId: this._faker.string.uuid(),
      userName: this._faker.internet.username({ firstName, lastName }),
      fullName,
      firstName,
      lastName,
      email: this._faker.internet.email({ firstName, lastName }),
      passwordChangeTime: this._faker.date.past(),
      blocked: this._faker.datatype.boolean(0.1),
    };
  };
}
