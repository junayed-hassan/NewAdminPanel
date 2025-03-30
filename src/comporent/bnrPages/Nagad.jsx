import React, { useState } from 'react'


function Nagad() {
    const [transactionId, setTransactionId] = useState("");
    return (
        <div className="min-h-screen flex flex-col items-center bg-neutral-900 text-white p-4">
            {/* Amount Display */}
            <div className="w-full max-w-md bg-[#ff4b33] text-white text-center text-xl font-bold py-3 rounded-lg">
                1000৳
            </div>

            {/* Transaction ID Input Section */}
            <div className="w-full max-w-md bg-neutral-800 p-4 rounded-lg mt-4">
                <p className="text-gray-300 mb-2">ট্রানজেকশন আইডি লিখুন</p>
                <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-full p-3 bg-neutral-700 text-white rounded-lg outline-none"
                    placeholder="..."
                />
            </div>

            {/* Instructions */}
            <div className="w-full mb-4 max-w-md bg-neutral-800 p-4 rounded-lg mt-4 text-gray-300 text-sm">
                <p>*167# ডায়াল করে আপনার <span className="text-[#ff4b33]">NAGAD</span> মোবাইল মেনুতে যান অথবা <span className="text-[#ff4b33]">NAGAD</span> অ্যাপে যান।</p>
                <p className="mt-2"> <span className="text-[#ff4b33] font-bold">"Send Money"</span> -এ ক্লিক করুন।</p>
                <p className="mt-2">প্রাপক নম্বর হিসেবে এই নম্বরটি লিখুন: <span className="text-[#ff4b33] font-bold">01303260848</span></p>
                <button className="bg-orange-600 text-white px-3 py-1 rounded-md mt-2">কপি করুন</button>
                <p className="mt-2">টাকার পরিমাণ: <span className="text-[#ff4b33] font-bold">626</span></p>
                <p className="mt-2">নিশ্চিত করতে এখন আপনার <span className="text-[#ff4b33]">NAGAD</span> মোবাইল মেনু পিন লিখুন।</p>
                <p className="mt-2">সবকিছু ঠিক থাকলে, আপনি <span className="text-[#ff4b33]">NAGAD</span> থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।</p>
                <p className="mt-2">এখন উপরের বক্সে আপনার <span className="text-[#ff4b33]">Transaction ID</span> দিন এবং নিচের VERIFY বাটনে ক্লিক করুন।</p>
            </div>

            {/* Confirm Button */}
            <button
                className="w-full mt-auto max-w-md bg-[#ff4b33] text-white font-bold py-3 rounded-lg text-center text-lg transition active:scale-95"
                disabled={!transactionId}
            >
                পেমেন্ট কনফার্ম করুন
            </button>
        </div>
    )
}

export default Nagad

