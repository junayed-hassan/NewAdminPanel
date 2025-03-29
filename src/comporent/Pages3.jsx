
function Pages3() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center p-4">
            {/* Header */}
            <h1 className="text-center w-md py-4 mb-2 shadow-2xl text-xl font-bold text-gray-300 bg-gray-900 sticky top-0 z-50">পেমেন্ট মেথড সিলেক্ট করুন</h1>

            {/* Banner */}
            <div className="w-full max-w-md rounded-lg overflow-hidden mb-4">
                <img src="./banner2.jpg" alt="Payment Banner" className="w-full" />
            </div>

            {/* Mobile Banking Section */}
            <div className="w-full max-w-md bg-neutral-800 rounded-lg p-4 text-center mb-4">
                <h2 className="text-lg font-[600] text-gray-300">মোবাইল ব্যাংকিং</h2>
            </div>

            {/* Payment Options */}
            <div className="w-full max-w-md text-gray-300 font-[600] flex justify-around mb-5 items-center bg-neutral-800 p-4 rounded-lg">
                <div className="flex flex-col items-center">
                    <img src="./bkash.png"
                        alt="Bkash" className="w-16 h-16 object-contain rounded-xl" />
                    <span className="text-lg mt-2">বিকাশ</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./nagad.png"
                        alt="Nagad" className="w-16 h-16 object-contain rounded-xl" />
                    <span className="text-lg mt-2">নগদ</span>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./roket.png"
                        alt="Rocket" className="w-16 h-16 object-contain rounded-xl" />
                    <span className="text-lg mt-2">রকেট</span>
                </div>
            </div>

            {/* Payment Button */}
            <button className="w-full mt-auto max-w-md font-[600] text-lg h-12 inline-flex items-center justify-center rounded-md 
                       bg-[#6c00f6] text-gray-300 px-6 
                      shadow-lg shadow-neutral-500/20 transition active:scale-95">
                পেমেন্ট করুন ১০০০ টাকা
            </button>
        </div>
    )
}

export default Pages3
