import { useState, useEffect, useRef } from "react";
import Button from "../../../components/ui/Button";
import MymateLogo from "../../../assets/images/MymateLogo.svg";

const ConfirmNumberModal = ({ initialPhoneNumber, onConfirm }) => {
  const [editableNumber, setEditableNumber] = useState(initialPhoneNumber);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setEditableNumber(initialPhoneNumber);
    setIsEditing(false);
  }, [initialPhoneNumber]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleConfirm = () => {
    onConfirm(editableNumber);
  };

  return (
    <div className="flex flex-col items-center text-center p-4">
      <img src={MymateLogo} alt="MyMate logo" className="w-12 h-12 mb-6" />
      <h2 className="text-lg font-semibold text-purple mb-8">
        Confirm if this is your phone number?
      </h2>
      <div className="w-full max-w-xs">
        <input
          ref={inputRef}
          type="text"
          value={editableNumber}
          readOnly={!isEditing}
          onChange={(e) => setEditableNumber(e.target.value)}
          className={`w-full text-center text-base font-semibold bg-transparent border-b-2 focus:outline-none pb-2 transition-colors duration-300
            ${
              isEditing
                ? "text-purple-600 border-purple-500"
                : "text-red-500 border-purple"
            }
          `}
        />
      </div>
      <div className="flex items-center justify-center gap-4 mt-12 w-full">
        <Button
          label="Edit"
          size="medium"
          color="lightPurple"
          onClick={handleEditClick}
          className="w-full"
        />
        <Button
          label="Confirm"
          size="medium"
          color="purple"
          onClick={handleConfirm}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ConfirmNumberModal;
