export class ConfigModel {
  constructor(public id,
              public firstName: string,
              public lastName: string,
              public email: string,
              public lastUpdateTime: Date) {
  }
}
