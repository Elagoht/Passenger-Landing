const ApiCaller = <DataType>(
  url: string | URL | globalThis.Request,
  init?: RequestInit
) => fetch(
  url,
  init
) as Promise<
  { json: () => Promise<DataType> }
  & Response
>

export default ApiCaller