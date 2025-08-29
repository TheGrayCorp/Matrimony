import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InputField from "../../components/ui/Input/InputField";
import SelectField from "../../components/ui/Input/SelectField";
import TextareaField from "../../components/ui/Input/TextareaField";
import Button from "../../components/ui/Button";

const occupationTypeOptions = [
  { value: "government", label: "Government" },
  { value: "private", label: "Private" },
  { value: "selfemployed", label: "Self Employed" },
  { value: "unemployed", label: "Un Employed" },
];

const countryOptions = [
  { value: "lk", label: "Sri Lanka" },
  { value: "in", label: "India" },
  { value: "us", label: "United States" },
];

const maritalStatusOptions = [
  { value: "unmarried", label: "Unmarried" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const CompleteProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      occupationType: "",
      dob: "",
      maritalStatus: "",
      occupation: "",
      education: "",
      country: "",
      nationality: "",
      religion: "",
      height: "",
      bio: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      console.log("Form Data:", data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8">
        <Controller
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          render={({ field }) => (
            <SelectField
              label="Country"
              id="country"
              options={countryOptions}
              error={errors.country}
              placeholder="Select your country"
              {...field}
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
        <Button label="Complete" size="auth" color="darkRed" type="submit" />
      </div>
      {loading && <p className="text-blue-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default CompleteProfileForm;
