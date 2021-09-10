
import { IDatabase, REQUEST_tYPE } from "../typings/index"
import { Database } from "./database"

class Cloud {
  callFunction(): void {

  }

  callContainer(): void {

  }

  database(): IDatabase {
    return new Database()
  }
}

export const cloud = new Cloud()