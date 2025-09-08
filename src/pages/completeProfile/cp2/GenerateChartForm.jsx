import { useForm, Controller } from "react-hook-form";
import SelectField from "../../../components/ui/Input/SelectField";
import InputField from "../../../components/ui/Input/InputField";
import Button from "../../../components/ui/Button";

const placeOfBirthOptions = [
  { value: "colombo", label: "Colombo, Sri Lanka" },
  { value: "jaffna", label: "Jaffna, Sri Lanka" },
  { value: "chennai", label: "Chennai, India" },
];

const GenerateChartForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      placeOfBirth: "",
      dateOfBirth: "",
      timeOfBirth: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-8"
    >
      <Controller
        name="placeOfBirth"
        control={control}
        rules={{ required: "Place of birth is required" }}
        render={({ field }) => (
          <SelectField
            label="Place Of Birth"
            id="placeOfBirth"
            options={placeOfBirthOptions}
            error={errors.placeOfBirth}
            placeholder="Select a place"
            {...field}
          />
        )}
      />
      <InputField
        label="Date Of Birth"
        id="dateOfBirth"
        type="date"
        register={register("dateOfBirth", {
          required: "Date of birth is required",
        })}
        error={errors.dateOfBirth}
      />
      <InputField
        label="Time Of Birth"
        id="timeOfBirth"
        type="time"
        register={register("timeOfBirth", {
          required: "Time of birth is required",
        })}
        error={errors.timeOfBirth}
      />
      <div className="flex justify-center pt-4">
        <Button
          label="Auto Generate my Astrology Chart"
          size="auth"
          color="purple"
          type="submit"
        />
      </div>
    </form>
  );
};

export default GenerateChartForm;
