export default class ErroHandler extends Error {
  constructor(public statusCode: number, public message: string) {
    super();
  }
}
