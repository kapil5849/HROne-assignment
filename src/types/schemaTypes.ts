export type FieldType = "string" | "number" | "nested";

export interface SchemaField {
  key: string;
  type: FieldType;
  children?: SchemaField[];
}

export interface SchemaBuilderProps {
  nestIndex?: number;
  control: any;
  register: any;
  setValue: any;
  getValues: any;
  name: string;
}
