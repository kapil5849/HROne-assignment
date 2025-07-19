# JSON Schema Builder

A dynamic React application for building JSON schemas with real-time preview. Built with React, TypeScript, Ant Design, and React Hook Form.

## 🚀 Features

- **Dynamic Field Management**: Add, edit, and delete schema fields
- **Multiple Data Types**: Support for String, Number, and Nested types
- **Real-time JSON Preview**: Live preview of the schema as you build it
- **Nested Fields**: Create complex nested structures with recursive support
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript Support**: Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Ant Design** - UI components
- **React Hook Form** - Form state management
- **Vite** - Build tool

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kapil5849/HROne-assignment.git
   cd HROne
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Adding Fields
1. Click the "+ Add Field" button to add a new field
2. Enter a field name in the "Field Name" input
3. Select the field type from the dropdown (String, Number, or Nested)

### Editing Fields
- **Field Name**: Click on the input field and type the desired name
- **Field Type**: Use the dropdown to change the field type
- **Delete Field**: Click the red minus button to remove a field

### Nested Fields
1. Select "Nested" as the field type
2. The field will expand to show a nested schema builder
3. Add child fields within the nested structure
4. Nested fields support unlimited recursion

### JSON Preview
- The JSON preview updates in real-time as you modify fields
- Empty field names are automatically filtered out
- Sample values are generated based on field types:
  - String fields: `"STRING"`
  - Number fields: `"NUMBER"`
  - Nested fields: `{}` (empty object)

## 📁 Project Structure

```
src/
├── components/
│   └── SchemaBuilder.tsx    # Main schema builder component
├── types/
│   └── schemaTypes.ts       # TypeScript type definitions
├── utils/
│   └── schemaUtils.ts       # Utility functions for JSON conversion
├── App.tsx                  # Main application component
└── main.tsx                 # Application entry point
```

**Built with ❤️ for HROne Frontend Intern Hiring Task**


Deployed Link: https://hr-one-assignment-chi.vercel.app/