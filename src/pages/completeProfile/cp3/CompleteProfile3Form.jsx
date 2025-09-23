import { useForm, Controller } from "react-hook-form";
import InputField from "../../../components/ui/Input/InputField";
import SelectField from "../../../components/ui/Input/SelectField";
import TextareaField from "../../../components/ui/Input/TextareaField";
import Button from "../../../components/ui/Button";
import CountrySelect from "../../../components/ui/Input/CountrySelect";
import {
  maritalStatusOptions,
  occupationTypeOptions,
} from "../../../data/Data";
import { useUIState } from "../../../context/UIStateContext";
import Spinner from "../../../components/ui/spinner/spinner";

const CompleteProfile3Form = ({ onSubmit }) => {
  const { isLoading, apiError } = useUIState();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      nationality: "",
      occupation: "",
      occupationType: "",
      height: "",
      education: "",
      religion: "",
      maritalStatus: "",
      bio: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
        <Controller
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          reset
          render={({ field }) => (
            <CountrySelect
              id="country"
              label="Country"
              error={errors.country}
              field={field}
            />
          )}
        />
        <InputField
          label="Nationality"
          id="nationality"
          type="text"
          placeholder="Enter your nationality"
          register={register("nationality", {
            required: "Nationality is required",
          })}
          error={errors.nationality}
        />
        <InputField
          label="Occupation"
          id="occupation"
          type="text"
          placeholder="Enter your occupation"
          register={register("occupation", {
            required: "Occupation is required",
          })}
          error={errors.occupation}
        />
        <Controller
          name="occupationType"
          control={control}
          rules={{ required: "Occupation type is required" }}
          render={({ field }) => (
            <SelectField
              label="Occupation Type"
              id="occupationType"
              options={occupationTypeOptions}
              error={errors.occupationType}
              placeholder="Select your occupation type"
              {...field}
            />
          )}
        />
        <InputField
          label="Height (cm)"
          id="height"
          type="number"
          placeholder="Enter your height in cm"
          register={register("height", { required: "Height is required" })}
          error={errors.height}
        />
        <InputField
          label="Education"
          id="education"
          type="text"
          placeholder="Enter your education"
          register={register("education", {
            required: "Education is required",
          })}
          error={errors.education}
        />
        <div className="space-y-10">
          <InputField
            label="Religion"
            id="religion"
            type="text"
            placeholder="Enter your religion"
            register={register("religion", {
              required: "Religion is required",
            })}
            error={errors.religion}
          />
          <Controller
            name="maritalStatus"
            control={control}
            rules={{ required: "Marital status is required" }}
            render={({ field }) => (
              <SelectField
                label="Marital Status"
                id="maritalStatus"
                options={maritalStatusOptions}
                error={errors.maritalStatus}
                placeholder="Select your status"
                {...field}
              />
            )}
          />
        </div>
        <TextareaField
          label="Bio"
          id="bio"
          type="text"
          placeholder="Write your bio in 254 letters"
          register={register("bio", { required: "Bio is required" })}
          error={errors.bio}
        />
      </div>
      <div className="flex justify-end mt-4">
        <Button
          label={isLoading ? <Spinner /> : "Complete"}
          size="auth"
          color="purple"
          type="submit"
        />
      </div>
      {apiError && <p className="text-red-500">{apiError}</p>}
    </form>
  );
};

export default CompleteProfile3Form;
