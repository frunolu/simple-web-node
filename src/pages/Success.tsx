
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md w-full px-4">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-green-600">It works!</h1>
        
        <p className="text-gray-600 mb-8">Your submission was successful.</p>
        
        <Button 
          onClick={() => navigate("/")}
          variant="outline"
          className="mt-4"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default Success;
