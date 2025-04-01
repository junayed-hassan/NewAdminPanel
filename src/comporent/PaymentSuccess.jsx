import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="text-green-500 w-12 h-12" />
          </div>
          <h2 className="text-xl font-semibold mt-4">Payment Success!</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">1000৳</p>
        </div>

        <CardContent className="mt-4">
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Ref Number</span>
              <span className="font-medium">003465342323</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span className="font-medium">Mar 22, 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time</span>
              <span className="font-medium">07:28 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-medium">Bank Transfer</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Sender Name</span>
              <span className="font-medium">Aakash Khanal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Receiver Name</span>
              <span className="font-medium">Subash Limbu</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Status</span>
              <span className="text-green-600 font-semibold">Success</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span className="text-gray-500">Total Amount</span>
              <span className="text-black">Rs. 10,000</span>
            </div>
          </div>
        </CardContent>

        <div className="mt-6">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Back to Home
          </Button>
        </div>
      </Card>
    </div>
  );
}
