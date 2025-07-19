import type { SchemaField } from "../types/schemaTypes";

export function schemaToSampleObject(schema: SchemaField[] = []): Record<string, any> {
  const obj: Record<string, any> = {};
  for (const field of schema) {
    if (!field.key) continue;
    switch (field.type) {
      case "string":
        obj[field.key] = "STRING";
        break;
      case "number":
        obj[field.key] = "NUMBER";
        break;
      case "nested":
        obj[field.key] = schemaToSampleObject(field.children || []);
        break;
      default:
        obj[field.key] = "";
    }
  }
  return obj;
}
