import { IAPIParam, ICollection, IRequestParamWithData, REQUEST_tYPE } from "../typings"
import { Doc } from "./doc"
import { sendRequest } from "../api/api"
import { Docs } from "./docs"

export class Collection implements ICollection {
  collectionName: string
  watch: () => void

  constructor(collectionName: string) {
    this.collectionName = collectionName
    this.watch = function(): void {}
  }

  add(args: IRequestParamWithData): void | Promise<any> {
    const _option: IAPIParam = {
      ...args,
      method: 'post'
    }
    return sendRequest(this.collectionName, _option, REQUEST_tYPE.add)
  }

  doc(id: string): Doc {
    const _document = new Doc(id, this)
    return _document
  }

  aggregate():void {}

  where(_data: Object): Docs {
    const _docs = new Docs(this.collectionName, _data)
    return _docs
  }
}