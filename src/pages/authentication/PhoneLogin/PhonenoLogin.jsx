import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal } from "antd";
import { isValidPhoneNumber } from "libphonenumber-js";
import Button from "../../../components/ui/Button";
import PhoneNumberInput from "../../../components/ui/Input/PhoneNumberInput";
import CountrySelect from "../../../components/ui/Input/CountrySelect";
import ConfirmNumberModal from "./ConfirmNumberModal";

const PhonenoLogin = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: null,
      phoneNumber: "",
    },
    mode: "onChange",
  });
  const selectedCountry = watch("country");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullPhoneNumber, setFullPhoneNumber] = useState("");

  useEffect(() => {
    if (selectedCountry) {
      trigger("phoneNumber");
    }
  }, [selectedCountry, trigger]);

  const onFormSubmit = (data) => {
    const combinedNumber = `${data.country.phonecode} ${data.phoneNumber}`;
    setFullPhoneNumber(combinedNumber);
    setIsModalOpen(true);
  };

  const handleModalConfirm = (finalNumber) => {
    console.log("Phone number confirmed:", finalNumber);
    setIsModalOpen(false);
    reset();
  };

  const handleModalEdit = () => {
    console.log("Closing modal to edit.");
    setIsModalOpen(false);
  };

  return (
    <div className="px-6">
      <div className="mb-12">
        <p className="flex justify-center text-middleGray text-xl font-medium">
          Enter your phone number
        </p>
        <p className="text-sm text-middleGray mt-8">
          Make sure this number can receive SMS. You will receive your
          activation code through it.
        </p>
      </div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-8 flex">
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="w-full flex flex-col gap-y-6"
          >
            <Controller
              name="country"
              control={control}
              rules={{ required: "Country is required" }}
              render={({ field }) => (
                <CountrySelect
                  id="country"
                  label="Country"
                  error={errors.country}
                  field={field}
                />
              )}
            />
            <PhoneNumberInput
              id="phoneNumber"
              label="Phone number"
              phonecode={selectedCountry ? selectedCountry.phonecode : ""}
              register={register("phoneNumber", {
                required: "Phone number is required",
                validate: {
                  isValid: (value) => {
                    const countryCode = selectedCountry?.value;

                    if (!countryCode) return true;
                    return (
                      isValidPhoneNumber(value, countryCode) ||
                      "Please enter a valid phone number for the selected country."
                    );
                  },
                },
              })}
              error={errors.phoneNumber}
            />
            <div className="mt-4">
              <Button
                label="Confirm"
                size="large"
                color="purple"
                type="submit"
                className="w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleModalEdit}
        centered
        closable={true}
        maskClosable={false}
        footer={null}
      >
        <ConfirmNumberModal
          initialPhoneNumber={fullPhoneNumber}
          onConfirm={handleModalConfirm}
          onEdit={handleModalEdit}
        />
      </Modal>
    </div>
  );
};

export default PhonenoLogin;
