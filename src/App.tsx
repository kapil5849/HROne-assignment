import { useForm } from "react-hook-form";
import { Card } from "antd";
import SchemaBuilder from "./components/SchemaBuilder";
import { schemaToSampleObject } from "./utils/schemaUtils";

function App() {
  const { control, register, setValue, getValues, watch } = useForm({
    defaultValues: {
      schema: [],
    },
    mode: "all",
  });

  const schema = watch();
  const schemaFields = schema.schema || [];
  const sampleJson = schemaToSampleObject(schemaFields);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 24,
        maxWidth: 1200,
        margin: "40px auto",
        padding: 16,
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: 1, minWidth: 320 }}>
        <Card title="Schema Builder" style={{ height: "fit-content" }}>
          <SchemaBuilder
            control={control}
            register={register}
            setValue={setValue}
            getValues={getValues}
            name="schema"
          />
        </Card>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: 320,
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <Card title="JSON Preview" style={{ height: "fit-content" }}>
          <pre
            style={{
              background: "#f6f6f6",
              padding: 16,
              margin: 0,
              borderRadius: 4,
              fontSize: 12,
              overflow: "auto",
            }}
          >
            {JSON.stringify(sampleJson, null, 2)}
          </pre>
        </Card>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="display: flex"] {
              flex-direction: column !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
