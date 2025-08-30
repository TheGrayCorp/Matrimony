import { useForm, Controller } from "react-hook-form";
import InputField from "../../../components/ui/Input/InputField";
import Button from "../../../components/ui/Button";
import GenderSelector from "./GenderSelector";

const Step1Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-8 mt-20"
    >
      <InputField
        label="First Name"
        id="firstName"
        placeholder="Enter Your First Name"
        register={register("firstName", { required: "First name is required" })}
        error={errors.firstName}
      />
      <InputField
        label="Last Name"
        id="lastName"
        placeholder="Enter Your Last Name"
        register={register("lastName", { required: "Last name is required" })}
        error={errors.lastName}
      />
      <Controller
        name="gender"
        control={control}
        rules={{ required: "Please select a gender" }}
        render={({ field }) => (
          <GenderSelector value={field.value} onChange={field.onChange} />
        )}
      />
      {errors.gender && (
        <p className="text-darkRed text-xs text-center -mt-4">
          {errors.gender.message}
        </p>
      )}
      <div className="flex justify-center">
        <Button label="Next" size="auth" color="darkRed" type="submit" />
      </div>
    </form>
  );
};

export default Step1Form;
