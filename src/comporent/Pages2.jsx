import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, MenuItem, Select, Checkbox, FormControlLabel, CircularProgress } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

function Pages2() {
    const [language, setLanguage] = useState("বাংলা");
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [site, setSite] = useState("");
    const [rate, setRate] = useState("00টা");

    const siteOptions = [
        { name: "betx300.world", rate: "23টা" },
        { name: "betx375.world", rate: "25টা" },
        { name: "betx385.world", rate: "27টা" }
    ];

    const handleSiteChange = (e) => {
        const selectedSite = e.target.value;
        const matchedSite = siteOptions.find((s) => s.name === selectedSite);
        setSite(selectedSite);
        setRate(matchedSite ? matchedSite.rate : "00টা");
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="min-h-screen flex items-center justify-center bg-black text-white">
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-lg w-full bg-gray-900 p-4 rounded-lg shadow-lg">
                <h1 className="text-center shadow-2xl mb-3 py-2.5 text-xl font-bold text-gray-300 bg-gray-900 sticky top-0 z-50">
                    এজেন্ট সাইন আপ করুন
                </h1>
                {/* Banner */}
                <motion.img src="/banner2.jpg" alt="Banner" className="w-full rounded-lg" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />

                {/* Full Name */}
                <div className="mt-4">
                    <label className="block text-sm font-[600] text-gray-300 mb-2">আপনার নাম লিখুন</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="...."
                        sx={{
                            backgroundColor: "#1F2937", // bg-gray-800
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

                {/* Phone Number */}
                <div className="mt-4">
                    <label className="block text-sm font-[600] text-gray-300 mb-2">আপনার WhatsApp নাম্বার লিখুন</label>
                    <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="...."
                        sx={{
                            backgroundColor: "#1F2937", // bg-gray-800
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


                {/* Language Selection */}
                <div>
                    <label className="block text-sm font-[600] text-gray-300 mb-2 mt-4">
                        সাইট ক্যাটাগরি সিলেক্ট করুন
                    </label>
                    <div className="flex gap-2 font-[600] justify-between h-12 mb-4 ">
                        {["বাংলা", "ডলার", "সেমক ডিপোজিট"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => {
                                    if (language !== lang) {
                                        setSite(""); // ক্যাটাগরি চেঞ্জ হলে সাইট রিসেট হবে
                                        setRate(""); // রেটও রিসেট হবে
                                    }
                                    setLanguage(lang);
                                }}
                                className={`inline-flex font-[600] h-12 border border-gray-600 items-center justify-center rounded-md px-6 text-xs text-neutral-50 shadow-sm shadow-neutral-500/20 transition active:scale-95 ${language === lang ? "bg-sky-700" : "bg-gray-800"
                                    }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>


                </div>

                {/* Site Selection */}
                <div>
                    <div className="flex justify-between gap-2">
                        <label className="block text-sm whitespace-nowrap font-[600] text-gray-300 mb-2">
                            কোন সাইট নিবেন সিলেক্ট করুন
                        </label>
                        <label className="block text-sm font-[600] text-gray-300 me-14">
                            রেট
                        </label>
                    </div>
                    <div className="flex items-center gap-2 mb-4 whitespace-nowrap">
                        <Select
                            value={site}
                            onChange={handleSiteChange}
                            fullWidth
                            displayEmpty
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        backgroundColor: "#1F2937",
                                        color: "white",
                                    },
                                },
                            }}
                            sx={{
                                backgroundColor: "#1F2937", // bg-gray-800
                                color: "white",
                                fontSize: "13px",
                                fontWeight: "600",
                                height: "48px", // h-12
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#4B5563", // Default border color (gray-600)
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#6D28D9", // Hover border color (purple-700)
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#6D28D9", // Focus border color (purple-700)
                                        borderWidth: "0px", // Focus border width (2px)
                                    },
                                },
                                "& .MuiSvgIcon-root": {
                                    color: "white", // Arrow icon color
                                },
                            }}
                        >
                            {site === "" && <MenuItem value="" disabled>সাইট সিলেক্ট করুন</MenuItem>}
                            {siteOptions.map(({ name }) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>



                        {/* রেট আলাদা বক্সে দেখাবে */}
                        <div className="bg-gray-800 text-center rounded-lg h-12 text-white min-w-20 flex items-center justify-center">
                            {rate ? <span className="text-sm">{rate}</span> : <span className="text-white text-sm font-[600]">00টা</span>}
                        </div>
                    </div>
                </div>

                {/* Check Site Button */}
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-full py-3 text-sm bg-sky-700 font-[600] rounded-md mb-4 text-gray-300">সাইট চেক করুন</motion.button>

                {/* Info Text */}
                <p className="text-sm text-red-500 font-[600] text-justify mb-4">*এজেন্ট একাউন্ট কনফার্ম করতে অন্ততঃ পক্ষে 1000 টাকা ডিপোজিট করতে হবে।</p>
                <p className="text-sm text-gray-400 font-[600] mb-4 text-justify">অগ্রিম পেমেন্ট করার মূল উদ্দেশ্য হলো, অনেকে একাউন্ট খুলে পরবর্তীতে কোন ব্যালেন্স নেই না। প্যানেল সম্পূর্ণ খালি থাকে, তাই যারা সঠিকভাবে এজেন্ট নেবে, তারা অবশ্যই অ্যাডভান্স পেমেন্ট করে নিতে হবে।</p>

                {/* Agreement Checkbox & WhatsApp */}
                <div className="flex justify-between items-center">
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: "#0369A1", // আনচেকড অবস্থায় Sky-700
                                    "&.Mui-checked": {
                                        color: "#0369A1" // চেকড অবস্থায়ও Sky-700
                                    }
                                }}
                                checked={agree}
                                onChange={() => setAgree(!agree)}
                            />
                        }
                        label={<span className="text-sm font-semibold text-sky-700">আমি এই শর্তে রাজি আছি</span>}
                    />

                    <motion.div className="fixed bottom-18 right-5" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <button className="bg-green-500 px-3 py-2.5 rounded-full shadow-lg">
                            <WhatsApp className="text-white" />
                        </button>
                    </motion.div>
                </div>

                {/* Submit Button */}
                <motion.div className="w-full" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button onClick={handleSubmit} disabled={!agree || loading}
                        className={`w-full py-3 text-gray-300 font-[600] text-sm rounded-md mt-4 flex justify-center items-center ${agree ? "bg-sky-700" : "bg-gray-800 cursor-not-allowed"}`}>
                        {loading ? <CircularProgress size={24} color="inherit" /> : "এগিয়ে যান"}
                    </button>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}

export default Pages2;
