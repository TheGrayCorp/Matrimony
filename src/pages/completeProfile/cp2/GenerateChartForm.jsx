import { useForm, Controller } from "react-hook-form";
import InputField from "../../../components/ui/Input/InputField";
import Button from "../../../components/ui/Button";
import AsyncCitySelect from "../../../components/ui/Input/AsyncCitySelect";

const GenerateChartForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      placeOfBirth: null,
      dateOfBirth: "",
      timeOfBirth: "",
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="w-full max-w-md mx-auto space-y-8"
    >
      <Controller
        name="placeOfBirth"
        control={control}
        rules={{ required: "Place of birth is required" }}
        render={({ field }) => (
          <AsyncCitySelect
            label="Place Of Birth"
            id="placeOfBirth"
            error={errors.placeOfBirth}
            placeholder="Start typing to search for a city"
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
