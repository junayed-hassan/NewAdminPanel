import { useState } from "react";
import { Link } from "react-router-dom";

function Pages3() {
    const [selectedPayment, setSelectedPayment] = useState(null);

    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center p-4">
            {/* Header */}
            <h1 className="text-center w-full py-4 mb-2 shadow-2xl text-xl font-bold text-gray-300 bg-gray-900 sticky top-0 z-50">
                পেমেন্ট মেথড সিলেক্ট করুন
            </h1>

            {/* Banner */}
            <div className="w-full max-w-md rounded-lg overflow-hidden mb-4 animate-fade-in">
                <img src="./banner2.jpg" alt="Payment Banner" className="w-full" />
            </div>

            {/* Mobile Banking Section */}
            <div className="w-full max-w-md bg-neutral-800 rounded-lg p-4 text-center mb-4 animate-slide-up">
                <h2 className="text-lg font-[600] text-gray-300">মোবাইল ব্যাংকিং</h2>
            </div>

            {/* Payment Options */}
            <div className="w-full max-w-md text-gray-300 font-[600] flex justify-around mb-5 items-center bg-neutral-800 p-4 rounded-lg animate-slide-up">
                {[
                    { id: "bkash", name: "বিকাশ", img: "./bkash.png" },
                    { id: "nagad", name: "নগদ", img: "./nagad.png" },
                    { id: "rocket", name: "রকেট", img: "./roket.png" }
                ].map((payment) => (
                    <div
                        key={payment.id}
                        className={`flex flex-col items-center cursor-pointer transition transform hover:scale-110 p-2 rounded-xl ${
                            selectedPayment === payment.id ? "bg-sky-700" : ""
                        }`}
                        onClick={() => setSelectedPayment(payment.id)}
                    >
                        <img src={payment.img} alt={payment.name} className="w-16 h-16 object-contain rounded-xl" />
                        <span className="text-lg mt-2">{payment.name}</span>
                    </div>
                ))}
            </div>

            {/* Payment Button */}
            <Link to={selectedPayment ? `/payment-method/${selectedPayment}` : "#"} className="w-full max-w-md mt-auto mb-4">
                <button
                    className={`w-full max-w-md font-[600] text-lg h-12 inline-flex items-center justify-center rounded-md 
                               px-6 shadow-lg shadow-neutral-500/20 transition active:scale-95 transform 
                               ${selectedPayment ? "bg-sky-700 text-gray-300 hover:scale-105" : "bg-neutral-800 text-gray-300 cursor-not-allowed"}`}
                    disabled={!selectedPayment}
                >
                    পেমেন্ট করুন ১০০০ টাকা
                </button>
            </Link>
        </div>
    );
}

export default Pages3;
