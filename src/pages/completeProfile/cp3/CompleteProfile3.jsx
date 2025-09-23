import ProfileCard from "./ProfileCard";
import CompleteProfileForm from "./CompleteProfileForm";

const Step3Form = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow px-4 lg:px-8 min-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 px-4 md:px-6">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <CompleteProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3Form;
