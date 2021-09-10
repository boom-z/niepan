import { ICollection, IDatabase } from "../typings";
import { Collection } from "./collection";

export class Database implements IDatabase {
  collection: (collectionName: string) => ICollection
  RegExp: () => void
  config: Object
  serverDate: () => void
  toJSON: () => void

  constructor() {
    this.collection = (collectionName: string): ICollection => {
      const _collection: Collection = new Collection(collectionName)
      return _collection
    }
    this.RegExp = () => {}
    this.config = {}
    this.serverDate = () => {}
    this.toJSON = () => {}
  }
}
