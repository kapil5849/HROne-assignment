import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { Button, Input, Select, Space, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import type { SchemaBuilderProps } from "../types/schemaTypes";

const fieldTypeOptions = [
  { label: "String", value: "string" },
  { label: "Number", value: "number" },
  { label: "Nested", value: "nested" },
];

const SchemaBuilder: React.FC<SchemaBuilderProps> = ({
  nestIndex = 0,
  control,
  register,
  setValue,
  getValues,
  name,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div style={{ marginLeft: nestIndex > 0 ? 24 : 0 }}>
      {fields.map((field, index) => {
        const fieldName = `${name}[${index}]`;

        return (
          <Card
            key={field.id}
            size="small"
            style={{
              marginBottom: 8,
              background: nestIndex > 0 ? "#f0f0f0" : "#fafafa",
              border: nestIndex > 0 ? "1px solid #d9d9d9" : "1px solid #f0f0f0",
            }}
          >
            <Space direction="vertical" style={{ width: "100%" }}>
              <Space align="start" wrap>
                <Controller
                  control={control}
                  name={`${fieldName}.key`}
                  defaultValue=""
                  render={({ field: inputField }) => (
                    <Input
                      {...inputField}
                      placeholder="Field Name"
                      style={{ width: 150 }}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name={`${fieldName}.type`}
                  defaultValue="string"
                  render={({ field: selectField }) => (
                    <Select
                      {...selectField}
                      style={{ width: 120 }}
                      options={fieldTypeOptions}
                      onChange={(value) => {
                        selectField.onChange(value);
                        if (value !== "nested") {
                          setValue(`${fieldName}.children`, undefined);
                        } else {
                          setValue(`${fieldName}.children`, []);
                        }
                      }}
                    />
                  )}
                />
                <Button
                  icon={<MinusCircleOutlined />}
                  onClick={() => remove(index)}
                  danger
                  size="small"
                />
              </Space>

              <Controller
                control={control}
                name={`${fieldName}.type`}
                render={({ field: { value: fieldType } }) =>
                  fieldType === "nested" ? (
                    <div style={{ marginTop: 8, paddingLeft: 16 }}>
                      <SchemaBuilder
                        nestIndex={nestIndex + 1}
                        control={control}
                        register={register}
                        setValue={setValue}
                        getValues={getValues}
                        name={`${fieldName}.children`}
                      />
                    </div>
                  ) : <></>
                }
              />
            </Space>
          </Card>
        );
      })}

      <Button
        type="dashed"
        onClick={() => append({ key: "", type: "string" })}
        icon={<PlusOutlined />}
        style={{ width: "100%", marginTop: 8 }}
      >
        Add Field
      </Button>
    </div>
  );
};

export default SchemaBuilder;
