import { useForm, Controller } from "react-hook-form";
import SelectField from "../../../components/ui/Input/SelectField";
import InputField from "../../../components/ui/Input/InputField";
import Button from "../../../components/ui/Button";
import { rasiOptions, starOptions } from "../../../rasiStarData/RasiStarData";

const placeOfBirthOptions = [
  { value: "colombo", label: "Colombo, Sri Lanka" },
  { value: "jaffna", label: "Jaffna, Sri Lanka" },
  { value: "chennai", label: "Chennai, India" },
];

const ManualEntryForm = ({ onSubmit }) => {
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
      rasi: "",
      natchathiram: "",
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
      <Controller
        name="rasi"
        control={control}
        rules={{ required: "Rasi is required" }}
        render={({ field }) => (
          <SelectField
            label="Rasi (Zodiac Sign)"
            id="rasi"
            options={rasiOptions}
            error={errors.rasi}
            placeholder="Select a rasi"
            {...field}
          />
        )}
      />
      <Controller
        name="natchathiram"
        control={control}
        rules={{ required: "Natchathiram is required" }}
        render={({ field }) => (
          <SelectField
            label="Natchathiram (Star Sign)"
            id="natchathiram"
            options={starOptions}
            error={errors.natchathiram}
            placeholder="Select a natchathiram"
            {...field}
          />
        )}
      />
      <div className="flex justify-center pt-4">
        <Button
          label="Add my Astrology Chart manually"
          size="auth"
          color="purple"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ManualEntryForm;
