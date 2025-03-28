import { useState } from "react";
import { motion } from "framer-motion";
import { TextField, MenuItem, Select, Checkbox, FormControlLabel, CircularProgress } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";

function Pages2() {
    const [language, setLanguage] = useState("বাংলা");
    const [agree, setAgree] = useState(false);
    const [loading, setLoading] = useState(false);
    const [site, setSite] = useState("");
    const [rate, setRate] = useState("23টা");

    const siteOptions = [
        { name: "betx300.world", rate: "23টা" },
        { name: "betx375.world", rate: "25টা" },
        { name: "betx385.world", rate: "27টা" }
    ];

    const handleSiteChange = (e) => {
        const selectedSite = e.target.value;
        const matchedSite = siteOptions.find((s) => s.name === selectedSite);
        setSite(selectedSite);
        setRate(matchedSite ? matchedSite.rate : "23টা");
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
                
                {/* Banner */}
                <motion.img src="/banner2.jpg" alt="Banner" className="w-full rounded-lg" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} />

                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">আপনার নাম লিখুন</label>
                    <TextField variant="outlined" fullWidth placeholder="আপনার নাম লিখুন"
                        InputProps={{ className: "bg-gray-700 text-white border border-gray-600 rounded-lg" }} />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">আপনার WhatsApp নাম্বার লিখুন</label>
                    <TextField variant="outlined" fullWidth placeholder="আপনার WhatsApp নাম্বার লিখুন"
                        InputProps={{ className: "bg-gray-700 text-white border border-gray-600 rounded-lg" }} />
                </div>

                {/* Language Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 mt-4">সাইট ক্যাটাগরি সিলেক্ট করুন</label>
                    <div className="flex gap-4 mb-4 whitespace-nowrap">
                        {["বাংলা", "ডলার", "সেমক ডিপোজিট"].map((lang, index) => (
                            <motion.button key={lang} onClick={() => setLanguage(lang)}
                                whileHover={{ scale: [1, 1.2, 1], transition: { duration: 0.6, ease: "easeInOut" } }}
                                className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 ${language === lang ? "bg-purple-700" : "bg-gray-700"}`}>{lang}</motion.button>
                        ))}
                    </div>
                </div>

                {/* Site Selection */}
                <div>
                    <div className="flex justify-between gap-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">কোন সাইট নিবেন সিলেক্ট করুন</label>
                        <label className="block text-sm font-medium text-gray-300">রেট</label>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <Select value={site} onChange={handleSiteChange} fullWidth className="bg-gray-800 text-white" displayEmpty>
                            {site === "" && <MenuItem value="" disabled>সাইট সিলেক্ট করুন</MenuItem>}
                            {siteOptions.map(({ name, rate }) => (
                                <MenuItem key={name} value={name}>{name} {rate}</MenuItem>
                            ))}
                        </Select>
                        <Select value={rate} className="bg-gray-800 text-white min-w-20">
                            <MenuItem value={rate}>{rate}</MenuItem>
                        </Select>
                    </div>
                </div>

                {/* Check Site Button */}
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-purple-700 rounded-md mb-4">সাইট চেক করুন</motion.button>

                {/* Info Text */}
                <p className="text-sm text-red-500 mb-4">*এজেন্ট একাউন্ট কনফার্ম করতে অন্ততঃপক্ষে 1000 টাকা ডিপোজিট করতে হবে।</p>
                <p className="text-sm text-gray-400 mb-4 text-justify">অগ্রিম পেমেন্ট করার মূল উদ্দেশ্য হলো, অনেকে একাউন্ট খুলে পরবর্তীতে কোন ব্যালেন্স নেই না। প্যানেল সম্পূর্ণ খালি থাকে, তাই যারা সঠিকভাবে এজেন্ট নেবে, তারা অবশ্যই অ্যাডভান্স পেমেন্ট করে নিতে হবে।</p>

                {/* Agreement Checkbox & WhatsApp */}
                <div className="flex justify-between items-center">
                    <FormControlLabel control={<Checkbox checked={agree} onChange={() => setAgree(!agree)} />} label="আমি এই শর্তে রাজি আছি" className="text-sm text-blue-700" />
                    <motion.div className="fixed bottom-5 right-5" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        <button className="bg-green-500 px-3 py-2.5 rounded-full shadow-lg">
                            <WhatsApp className="text-white" />
                        </button>
                    </motion.div>
                </div>

                {/* Submit Button */}
                <button onClick={handleSubmit} disabled={!agree || loading}
                    className={`w-full py-2 rounded-md mt-4 flex justify-center items-center ${agree ? "bg-purple-700" : "bg-gray-600 cursor-not-allowed"}`}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : "এগিয়ে যান"}
                </button>
            </motion.div>
        </motion.div>
    );
}

export default Pages2;
