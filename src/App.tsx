import { z } from "zod";
import Form, { useZodForm } from "~/forms/Form";
import Input from "~/forms/Input";
import Select from "~/forms/Select";
import SubmitButton from "~/forms/SubmitButton";

const schema = z.object({
  email: z.string().email(),
  // Numbers not between 10 & 20 will result in an error
  // being shown below the input thanks to FormField
  count: z.coerce.number().min(10).max(20),
  fruit: z.union([z.literal("apple"), z.literal("orange")]),
});

const FruitMap: Record<z.infer<typeof schema>["fruit"], string> = {
  apple: "Apple",
  orange: "Orange",
};

const App = () => {
  const form = useZodForm({
    schema,
  });

  return (
    <Form
      form={form}
      onSubmit={(data) => {
        console.log(data);

        // Adds some delay to demonstrate the form's disabled state
        return new Promise((res) => setTimeout(res, 1000));
      }}
    >
      <div className="p-4 space-y-4">
        <Input
          type="email"
          label="Email"
          // Even though Zod ensures an email is provided,
          // it's good to also let the browser handle required fields.
          required
          {...form.register("email")}
        />
        <Input
          type="number"
          label="Count"
          // Empty number fields produce a value of '0',
          // so we use 'required' to ensure a value is provided
          required
          {...form.register("count")}
        />
        <Select label="Fruit" {...form.register("fruit")}>
          {schema.shape.fruit.options.map((op) => (
            <option key={op.value} value={op.value}>
              {FruitMap[op.value]}
            </option>
          ))}
        </Select>
        <SubmitButton>Submit</SubmitButton>
      </div>
    </Form>
  );
};

export default App;
