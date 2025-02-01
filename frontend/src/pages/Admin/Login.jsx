// import React, { useState } from 'react';
// import logo from '../../images/logo.jpg';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let newErrors = { email: '', password: '' };

//     if (!email) {
//       newErrors.email = 'Email is required.';
//     }
//     if (!password) {
//       newErrors.password = 'Password is required.';
//     }

//     if (newErrors.email || newErrors.password) {
//       setErrors(newErrors);
//     } else {
//       console.log('Form submitted:', { email, password });
//       navigate('/dashboard'); 
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 px-4 md:px-8">
//       <div className="flex flex-col md:flex-row w-full max-w-lg md:max-w-5xl h-[600px] md:h-[550px] bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 relative">
//           <div className="w-full max-w-sm">
//             <div className="absolute top-0 left-0 flex">
//               <img src={logo} alt="Bee Comfort Logo" className="h-[50px]" />
//             </div>
//             <h1 className="text-3xl font-bold text-center mb-6 font-ibm-plex mt-24 sm:mt-24">Login</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label htmlFor="email" className="block font-light text-gray-600 font-poppins mb-2">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className={`w-full font-poppins px-4 py-3 border rounded-[40px] bg-slate-100 focus:ring focus:ring-pink-300 focus:outline-none ${
//                       errors.email ? 'border-red-500' : ''
//                     }`}
//                   />
//                   <span className="absolute inset-y-0 right-4 flex items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-5 h-5 text-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75L12 12m9.75-5.25L12 17.25M12 12L2.25 6.75"
//                       />
//                     </svg>
//                   </span>
//                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                 </div>
//               </div>
//               <div className="mb-6">
//                 <label htmlFor="password" className="block  font-light font-poppins text-gray-500 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="password"
//                     id="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="********"
//                     className={`w-full px-4 py-3 border rounded-[40px] focus:ring bg-slate-100 focus:ring-pink-300 focus:outline-none ${
//                       errors.password ? 'border-red-500' : ''
//                     }`}
//                   />
//                   <span className="absolute inset-y-0 right-4 flex items-center">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="w-5 h-5 text-gray-400"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15.75 9V5.25a3.75 3.75 0 00-7.5 0V9M12 15.75v1.5m0-1.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 0v1.5"
//                       />
//                     </svg>
//                   </span>
//                   {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-3 text-white mt-8 font-medium rounded-[40px] hover:bg-pink-600 font-ibm-plex transition"
//                 style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}
//               >
//                 Log in
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="hidden md:flex w-full md:w-1/2 items-end relative overflow-hidden" style={{ backgroundColor: "rgba(236, 0, 140, 1)" }}>
//           <div className="absolute bottom-10 left-10 z-10 text-white text-left">
//             <h4 className="text-3xl font-ibm-plex font-bold">
//               Hey <br /> Welcome <br /> Back
//             </h4>
//           </div>
//           <div
//             className="absolute top-[-5px] left-[-193px] rounded-full"
//             style={{
//               width: '350px',
//               height: '350px',
//               background: 'linear-gradient(204.77deg, #EC008C 22.8%, #FA7AB7 84.21%)',
//               zIndex: 1,
//             }}
//           ></div>
//           <div
//             className="absolute top-[-101px] left-[-5px] rounded-full"
//             style={{
//               width: '400px',
//               height: '400px',
//               background: 'linear-gradient(240.33deg, #EC008C 17.56%, #FF85CE 91.61%)',
//             }}
//           ></div>
//           <div
//             className="absolute bottom-20 right-20 bg-pink-200 rounded-full"
//             style={{
//               width: '100px',
//               height: '100px',
//               background: 'linear-gradient(270deg, #EC008C 0%, #FF6DCE 96.7%)',
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import logo from '../../images/logo.jpg';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted:', { email, password });
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4 md:px-8">
      <div className="flex flex-col md:flex-row w-full max-w-lg md:max-w-5xl h-[600px] md:h-[550px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-10 relative">
          <div className="w-full max-w-sm">
            <div className="absolute top-0 left-0 flex">
              <img src={logo} alt="Bee Comfort Logo" className="h-[50px]" />
            </div>
            <h1 className="text-3xl font-bold text-center mb-6 font-ibm-plex mt-24 sm:mt-24">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block font-light text-gray-600 font-poppins mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full font-poppins px-4 py-3 border rounded-[40px] bg-slate-100 focus:ring focus:ring-pink-300 focus:outline-none ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[rgba(111,117,126,1)]" />
                  </span>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block font-light font-poppins text-gray-500 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className={`w-full px-4 py-3 border rounded-[40px] focus:ring bg-slate-100 focus:ring-pink-300 focus:outline-none ${
                      errors.password ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center">
                    <FontAwesomeIcon icon={faKey} className="text-[rgba(111,117,126,1)]" style={{ transform: 'rotate(-315deg)' }} />
                  </span>
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white mt-8 font-medium rounded-[40px] hover:bg-pink-600 font-ibm-plex transition"
                style={{ backgroundColor: 'rgba(236, 0, 140, 1)' }}
              >
                Log in
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="hidden md:flex w-full md:w-1/2 items-end relative overflow-hidden"
          style={{ backgroundColor: 'rgba(236, 0, 140, 1)' }}
        >
          <div className="absolute bottom-10 left-10 z-10 text-white text-left">
            <h4 className="text-3xl font-ibm-plex font-bold">
              Hey <br /> Welcome <br /> Back
            </h4>
          </div>
          <div
            className="absolute top-[-5px] left-[-193px] rounded-full"
            style={{
              width: '350px',
              height: '350px',
              background: 'linear-gradient(204.77deg, #EC008C 22.8%, #FA7AB7 84.21%)',
              zIndex: 1,
            }}
          ></div>
          <div
            className="absolute top-[-101px] left-[-5px] rounded-full"
            style={{
              width: '400px',
              height: '400px',
              background: 'linear-gradient(240.33deg, #EC008C 17.56%, #FF85CE 91.61%)',
            }}
          ></div>
          <div
            className="absolute bottom-20 right-20 bg-pink-200 rounded-full"
            style={{
              width: '100px',
              height: '100px',
              background: 'linear-gradient(270deg, #EC008C 0%, #FF6DCE 96.7%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
