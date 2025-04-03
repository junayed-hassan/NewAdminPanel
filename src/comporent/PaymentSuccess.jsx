import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white p-4">
            {/* Header */}
            <Card className="w-[350px] md:w-[400px] mb-2 mt-8 mx-auto p-4 shadow-md rounded-2xl">
                <CardContent className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="p-2 mb-2  bg-green-100 rounded-full inline-flex items-center justify-center"
                    >
                        <strong className="p-1.5 bg-green-200 rounded-full">
                            <CheckCircleIcon className="text-green-500 text-6xl" />
                        </strong>
                    </motion.div>
                    <Typography variant="h6" className="mt-2 font-bold">
                        <p className="font-bold">পেমেন্ট সফল!</p>
                    </Typography>
                    <Typography variant="h5" className="text-blue-600 font-bold">
                    <p className="font-bold">1000৳</p>
                    </Typography>

                    <div className="text-left border-t-2 pt-4 border-dashed  border-gray-200 mt-4 text-sm text-gray-700">
                        <p className="flex justify-between items-center py-1">Ref Number:<strong>003465342323</strong></p>
                        <p className="flex justify-between items-center py-1">Date:<strong> Mar 22, 2024</strong></p>
                        <p className="flex justify-between items-center py-1">Time:<strong>07:28 PM</strong> </p>
                        <p className="flex justify-between items-center py-1">Payment Method:<strong> Bank Transfer</strong></p>
                        <p className="flex justify-between items-center py-1">Sender Name:<strong>Aakash Khanal</strong> </p>
                        <p className="flex justify-between items-center py-1">Receiver Name:<strong>Subash Limbu</strong> </p>
                        <p className="flex justify-between items-center py-1">Payment Status:<strong></strong> <span className="text-green-600 font-medium px-4 py-[2px] border-1 bg-green-50 rounded-lg">Success</span></p>
                        <p className="flex justify-between items-center py-1 border-t-2 pt-4 border-dashed  border-gray-200 mt-4 ">Total Amount:<strong> Rs.10,000</strong></p>
                    </div>
                </CardContent>
            </Card>
            <div className="flex flex-col mt-auto items-center">
                <Button
                    variant="contained"
                    className=" w-[350px] md:w-[400px] bg-blue-600 hover:bg-blue-700"
                >
                    Back to Home
                </Button>

            </div>
        </div>
    );
};

export default PaymentSuccess;