declare interface IOptions {
  camelCase?: CamelCaseOptions;
  customMatcher?: string;
  classnamesLoader?: boolean;
}

declare type CamelCaseOptions =
  | true
  | 'dashes'
  | 'dashesOnly'
  | 'only'
  | undefined;
