import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-[350px] md:w-[400px] p-4 shadow-lg rounded-2xl">
        <CardContent className="text-center">
          <CheckCircleIcon className="text-green-500 text-6xl" />
          <Typography variant="h6" className="mt-2 font-semibold">
          পেমেন্ট সফল!
          </Typography>
          <Typography variant="h4" className="text-blue-600 font-bold">
            1000৳
          </Typography>

          <div className="text-left mt-4 text-sm text-gray-700">
            <p><strong>Ref Number:</strong> 003465342323</p>
            <p><strong>Date:</strong> Mar 22, 2024</p>
            <p><strong>Time:</strong> 07:28 PM</p>
            <p><strong>Payment Method:</strong> Bank Transfer</p>
            <p><strong>Sender Name:</strong> Aakash Khanal</p>
            <p><strong>Receiver Name:</strong> Subash Limbu</p>
            <p><strong>Payment Status:</strong> <span className="text-green-600 font-medium">Success</span></p>
            <p><strong>Total Amount:</strong> Rs.10,000</p>
          </div>

          <Button
            variant="contained"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700"
          >
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;