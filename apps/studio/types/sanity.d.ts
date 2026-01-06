import 'sanity'

declare module 'sanity' {
  interface DocumentDefinition {
    __experimental_actions?: Array<'create' | 'update' | 'delete' | 'publish'>
  }
}
