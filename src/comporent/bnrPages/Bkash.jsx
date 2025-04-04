import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Bkash() {
    const [transactionId, setTransactionId] = useState("");
    return (
        <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white p-4">
            {/* Amount Display */}
            <div className="w-full max-w-md bg-pink-600 text-white text-center text-xl font-bold py-3 rounded-lg">
                1000৳
            </div>

            {/* Transaction ID Input Section */}
            <div className="w-full max-w-md bg-neutral-800 p-4 rounded-lg mt-4">
                <p className="text-gray-300 mb-2">ট্রানজেকশন আইডি লিখুন</p>
                <TextField
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    variant="outlined"
                    fullWidth
                    required
                    placeholder="...."
                    sx={{
                        backgroundColor: "#262626", // bg-gray-800
                        borderRadius: "8px",
                        height: "48px", // h-12 সেট করা হয়েছে
                        "& .MuiOutlinedInput-root": {
                            height: "48px", // ইনপুট বক্সের উচ্চতা ঠিক রাখা
                            "& fieldset": {
                                borderColor: "#374151", // Border color (gray-700)
                            },
                            "&:hover fieldset": {
                                borderColor: "#0369a1", // Hover border color (purple-700)
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#0369a1", // Focus border color (purple-700)
                            },
                        },
                        input: {
                            color: "white", // ইনপুট টেক্সট সাদা হবে
                            height: "48px", // ইনপুটের উচ্চতা ঠিক রাখা
                            padding: "12px", // ভেতরের প্যাডিং ঠিক রাখা
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: "#9CA3AF", // Placeholder text gray-500
                        }
                    }}
                />
            </div>

            {/* Instructions */}
            <div className="w-full mb-4 max-w-md bg-neutral-800 p-4 rounded-lg mt-4 text-gray-300 text-sm">
                <p>*247# ডায়াল করে আপনার <span className="text-pink-400">BKASH</span> মোবাইল মেনুতে যান অথবা <span className="text-pink-400">BKASH</span> অ্যাপে যান।</p>
                <p className="mt-2"> <span className="text-pink-400 font-bold">"Send Money"</span> -এ ক্লিক করুন।</p>
                <p className="mt-2">প্রাপক নম্বর হিসেবে এই নম্বরটি লিখুন: <span className="text-pink-400 font-bold">01303260848</span></p>
                <button className="bg-pink-600 text-white px-3 py-1 rounded-md mt-2">কপি করুন</button>
                <p className="mt-2">টাকার পরিমাণ: <span className="text-pink-400 font-bold">626</span></p>
                <p className="mt-2">নিশ্চিত করতে এখন আপনার <span className="text-pink-400">BKASH</span> মোবাইল মেনু পিন লিখুন।</p>
                <p className="mt-2">সবকিছু ঠিক থাকলে, আপনি <span className="text-pink-400">BKASH</span> থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।</p>
                <p className="mt-2">এখন উপরের বক্সে আপনার <span className="text-pink-400">Transaction ID</span> দিন এবং নিচের VERIFY বাটনে ক্লিক করুন।</p>
            </div>

            {/* Confirm Button */}
            <Link to="/payment-success" className="w-full max-w-md mt-auto mb-4">
                <button
                    className="w-full mt-auto mb-4 max-w-md bg-pink-600 text-white font-bold py-3 rounded-lg text-center text-lg transition active:scale-95"
                    disabled={!transactionId}
                >
                    পেমেন্ট কনফার্ম করুন
                </button>
            </Link>
        </div>
    )
}

export default Bkash
