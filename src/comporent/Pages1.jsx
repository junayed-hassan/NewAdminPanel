import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useState } from 'react';
import { TextField, IconButton, InputAdornment, MenuItem, Select } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Pages1() {
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currency, setCurrency] = useState("BDT");
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-dvh text-white pb-4">

        {/* headerSection */}
        <header className='w-full bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg mt-6 backdrop-blur-md mx-auto'>
          <div className='max-w-lg flex items-center mx-auto'>
            <span className='text-white'><KeyboardDoubleArrowLeftIcon /></span>
            <h1 className='text-white ps-[33%]'>সাইন আপ</h1>
          </div>
        </header>

        {/* bannerSection */}
        <div className='bannerSection flex justify-center'>
          <img src="./banner.jpg" alt="Banner" className="rounded-lg shadow-lg" />
        </div>

        {/* mainSection */}
        <section className='w-full max-w-lg bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg mt-6 backdrop-blur-md mx-auto'>
          <div className="max-w-md mx-auto space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">ব্যবহারকারীর নাম</label>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="৪-১৫ অক্ষর নাম্বার এলাউড"
                InputProps={{
                  className: "bg-gray-700 text-white border border-gray-600 rounded-lg",
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">পাসওয়ার্ড</label>
              <TextField
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="৬-২০ অক্ষর নাম্বার এলাউড"
                InputProps={{
                  className: "bg-gray-700 text-white border border-gray-600 rounded-lg",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff className="text-gray-400" /> : <Visibility className="text-gray-400" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">পাসওয়ার্ড নিশ্চিত করুন</label>
              <TextField
                variant="outlined"
                fullWidth
                type={showConfirmPassword ? "text" : "password"}
                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                InputProps={{
                  className: "bg-gray-700 text-white border border-gray-600 rounded-lg",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                        {showConfirmPassword ? <VisibilityOff className="text-gray-400" /> : <Visibility className="text-gray-400" />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>

            {/* Currency Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">কারেন্সি</label>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                fullWidth
                className="bg-gray-700 text-white border border-gray-600 rounded-lg"
              >
                <MenuItem value="BDT">BDT</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
              </Select>
            </div>
          </div>
        </section>

        {/* Additional Information Section */}
        <section className='w-full max-w-lg bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg mt-6 backdrop-blur-md mx-auto'>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">সম্পূর্ণ নাম</label>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="আপনার সম্পূর্ণ নাম লিখুন"
              InputProps={{
                className: "bg-gray-700  text-white border border-gray-600 rounded-lg",
              }}
            />
          </div>


          {/* Phone Number */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">ফোন নাম্বার</label>
            <TextField fullWidth variant="outlined" placeholder="ফোন নাম্বার" value={phone} onChange={(e) => setPhone(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position="start">+880</InputAdornment>,
                className: "bg-gray-700 text-white border border-gray-600 rounded-lg"
              }}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">ই-মেইল</label>
            <TextField
              variant="outlined"
              fullWidth
              type="email"
              placeholder="ই-মেইল"
              InputProps={{
                className: "bg-gray-700  text-white border border-gray-600 rounded-lg",
              }}
            />
          </div>

          {/* Referral Code */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">রেফার কোড</label>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="আপনার যদি থাকে তবে প্রবেশ করুন"
              InputProps={{
                className: "bg-gray-700  text-white border border-gray-600 rounded-lg",
              }}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default Pages1;

