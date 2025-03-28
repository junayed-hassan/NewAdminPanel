import { useState } from "react";
import { TextField, MenuItem, Select, Checkbox, FormControlLabel } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Pages2() {

    const [language, setLanguage] = useState("বাংলা");
    const [site, setSite] = useState("betx365.world");
    const [rate, setRate] = useState("23%");
    const [agree, setAgree] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="max-w-lg w-full bg-gray-900 p-2.5 rounded-lg shadow-lg ">
                {/* Banner */}
                <div className="mb-4">
                    <img src="/banner2.jpg" alt="Banner" className="w-full rounded-lg" />
                </div>

                {/* Full Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">আপনার নাম লিখুন</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="আপনার নাম লিখুন"
                        InputProps={{
                            className: "bg-gray-700  text-white border border-gray-600 rounded-lg",
                        }}
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2"> আপনার WhatsApp নাম্বার লিখুন</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="আপনার WhatsApp নাম্বার লিখুন"
                        InputProps={{
                            className: "bg-gray-700  text-white border border-gray-600 rounded-lg",
                        }}
                    />
                </div>

                {/* Language Selection */}
                <label className="block text-sm font-medium text-gray-300 mb-2">সাইট  ক্যাটাগরি সিলেক্ট করুন</label>
                <div className="flex gap-2 mb-4">
                    {['বাংলা', 'ডলার', 'সেমক ডিপোজিট'].map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setLanguage(lang)}
                            className={`flex-1 py-2 rounded-md ${language === lang ? 'bg-purple-700' : 'bg-gray-700'}`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>

                {/* Site Selection */}
                <div className="flex justify-between gap-2 ">
                    <label className="block text-sm font-medium text-gray-300 mb-2">কোন সাইট নিবেন সিলেক্ট করুন</label>
                    <label className="block text-sm font-medium text-gray-300 me-6 mb-2">রেট</label>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <Select value={site} onChange={(e) => setSite(e.target.value)} fullWidth className="bg-gray-800 text-white">
                        <MenuItem value="betx365.world">betx365.world</MenuItem>
                        <MenuItem value="betx300.world">betx300.world</MenuItem>
                        <MenuItem value="betx375.world">betx375.world</MenuItem>
                        <MenuItem value="betx385.world">betx385.world</MenuItem>
                    </Select>
                    <Select value={rate} onChange={(e) => setRate(e.target.value)} className="bg-gray-800 text-white">
                        <MenuItem value="23টা">23টা</MenuItem>
                        <MenuItem value="25টা">25টা</MenuItem>
                        <MenuItem value="27টা">27টা</MenuItem>
                        <MenuItem value="30টা">30টা</MenuItem>
                    </Select>
                </div>

                {/* Check Site Button */}
                <button className="w-full py-2 bg-purple-700 rounded-md mb-4">সাইট চেক করুন</button>

                {/* Info Text */}
                <div className="flex gap-1.5">
                    <p className="text-sm text-red-500 font-s mb-4">*এজেন্ট একাউন্ট কনফার্ম করতে অন্ততঃপক্ষে 1000 টাকা ডিপোজিট করতে হবে।</p>
                </div>
                <p className="text-sm text-gray-400 mb-4 text-justify">অগ্রিম পেমেন্ট করার মূল উদ্দেশ্য হলো, অনেকে একাউন্ট খুলে পরবর্তীতে কোন ব্যালেন্স নেই না। প্যানেল সম্পূর্ণ খালি থাকে, তাই যারা সঠিকভাবে এজেন্ট নেবে, তারা অবশ্যই অ্যাডভান্স পেমেন্ট করে নিতে হবে।</p>

                <div className="flex justify-between items-center">
                    {/* Agreement Checkbox */}
                    <FormControlLabel
                        control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} />}
                        label="আমি এই শর্তে রাজি আছি"
                        className="text-sm text-blue-700 whitespace-nowrap"
                    />

                    {/* WhatsApp Button */}
                    <div className="fixed bottom-5 right-5">
                        <button className="bg-green-500 px-3 py-2.5 rounded-full shadow-lg">
                            <WhatsApp className="text-white" />
                        </button>
                    </div>
                </div>


                {/* Submit Button */}
                <button
                    disabled={!agree}
                    className={`w-full py-2 rounded-md mt-4 ${agree ? 'bg-purple-700' : 'bg-gray-600 cursor-not-allowed'}`}>
                    এগিয়ে যান
                </button>

            </div>
        </div>
    )
}

export default Pages2
