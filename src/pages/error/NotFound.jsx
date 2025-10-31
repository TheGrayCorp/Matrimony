import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4 text-center space-y-6">
      <Typography variant="h1" className="text-4xl font-bold text-red-600">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" className="text-gray-600">
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        className="mt-4"
      >
        Go Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
