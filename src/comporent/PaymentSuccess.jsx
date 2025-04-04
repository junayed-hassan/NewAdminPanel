import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white p-4">
            {/* Header */}
            <Card className="w-[350px] md:w-[400px] mb-2 mt-8 mx-auto p-4 shadow-md rounded-2xl !bg-neutral-800">
                <CardContent className="text-center">
                    <Typography variant="h5" className="mb-4 font-bold">
                        <p className="font-bold text-gray-300">পেমেন্ট সফল!</p>
                    </Typography>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                        className="p-2 mb-2  bg-green-100 rounded-full inline-flex items-center justify-center"
                    >
                        <strong className="p-1.5 bg-green-200 rounded-full">
                            <CheckCircleIcon className="text-sky-400 text-6xl" />
                        </strong>
                    </motion.div>
                    <Typography variant="h5" className="text-blue-600 font-bold">
                        <p className="font-bold">1000৳</p>
                    </Typography>

                    <div className="text-left border-t-2 pt-4 border-dashed  border-gray-200 mt-4 text-sm text-gray-300">
                        <p className="flex justify-between items-center py-1">আপনার নাম:<strong>Rakib Hossain</strong></p>
                        <p className="flex justify-between items-center py-1">সাইট ক্যাটাগরি:<strong> </strong></p>
                        <p className="flex justify-between items-center py-1">সাইট লিঙ্ক:<strong></strong> </p>
                        <p className="flex justify-between items-center py-1">তারিখ:<strong>Mar 22, 2024</strong></p>
                        <p className="flex justify-between items-center py-1">সময়:<strong>07:28 PM</strong> </p>
                        <p className="flex justify-between items-center py-1">পেমেন্ট মেথড:<strong>bkash</strong></p>
                        <p className="flex justify-between items-center py-1">ট্রানজেকশন আইডি:<strong>000000000</strong></p>
                        <p className="flex justify-between items-center py-1">পেমেন্ট স্ট্যাটাস:<span className="text-green-600 font-medium px-4 py-[2px] border-1 bg-green-50 rounded-lg">Success</span></p>
                        <p className="flex justify-between items-center py-1 border-t-2 pt-4 border-dashed  border-gray-200 mt-4 ">টোটাল অ্যামাউন্ট:<strong> Rs.10,000</strong></p>
                    </div>
                </CardContent>
            </Card>
            <div className="flex flex-col mt-auto items-center">
                <Link to="/" className="w-full max-w-md mt-auto mb-4">
                    <Button
                        variant="contained"
                        className=" w-[350px] md:w-[400px] inline-flex h-12 items-center border border-gray-500 justify-center rounded-md bg-sky-700 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95 mb-4"
                    >
                        হোমে ফিরে যান
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;

// 