import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentSuccess = () => {
    return (
        <div className="flex justify-center items-center h-screen  min-h-screen bg-neutral-900 text-white p-4">
            <Card className="w-96 shadow-lg rounded-xl bg-gray-900">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                        <CheckCircleIcon className="text-green-500" fontSize="large" />
                    </div>
                    <Typography variant="h6" className="font-semibold">
                        পেমেন্ট সফল!
                    </Typography>
                    <Typography variant="h4" className="text-blue-600 font-bold mt-2">
                        1000৳
                    </Typography>
                    <div className="text-left mt-4 text-gray-600">
                        <Typography variant="body2">
                            <strong>Ref Number:</strong> 003465342323
                        </Typography>
                        <Typography variant="body2">
                            <strong>Date:</strong> Mar 22, 2024
                        </Typography>
                        <Typography variant="body2">
                            <strong>Time:</strong> 07:28 PM
                        </Typography>
                        <Typography variant="body2">
                            <strong>Payment Method:</strong> Bank Transfer
                        </Typography>
                        <Typography variant="body2">
                            <strong>Sender Name:</strong> Aakash Khanal
                        </Typography>
                        <Typography variant="body2">
                            <strong>Receiver Name:</strong> Subash Limbu
                        </Typography>
                        <Typography variant="body2" className="mt-2">
                            <strong>Payment Status:</strong> <span className="text-green-600">Success</span>
                        </Typography>
                        <Typography variant="h6" className="font-bold mt-4">
                            Total Amount: <span className="text-gray-900">Rs. 10,000</span>
                        </Typography>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="mt-4"
                    >
                        Back to Home
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default PaymentSuccess;