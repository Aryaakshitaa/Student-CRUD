export interface student {
  id?: number,
  roll: number,
  batch: string,
  name: string,
  domain: string,
  email: string,
  phoneNumber: string,
  status: boolean

}
export interface attendance {
  id?: number,
  date: string,
  present: Array<student>
}

