
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md w-full px-4">
        <h1 className="text-3xl font-bold mb-6">Welcome</h1>
        <p className="text-gray-600 mb-8">Click the button below to submit</p>
        
        <Button 
          onClick={handleSubmit}
          className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-all"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Index;
