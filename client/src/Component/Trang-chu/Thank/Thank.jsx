// import React, { useState } from "react";

// // Import assets
// import background from "../../../assets/thank/Paper-background.jpg";

// // Import components
// import {
//   Button,
//   Input,
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalHeader,
//   useDisclosure,
// } from "@nextui-org/react";
// import { IoArrowForwardCircleOutline } from "react-icons/io5";
// import { Parallax } from "react-scroll-parallax";

// function Thank() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   // Updated formData state to include new fields
//   const [formData, setFormData] = useState({
//     fullName: "", // "Họ và tên"
//     phoneNumber: "", // "Số điện thoại"
//     email: "",
//     requestDetails: "", // "Nội dung yêu cầu"
//   });

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const [validationErrors, setValidationErrors] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//   });

//   // Handle form submission with validation
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Reset validation errors before new submission
//     setValidationErrors({
//       fullName: "",
//       phoneNumber: "",
//       email: "",
//     });

//     let isValid = true; // Flag to track overall form validity

//     // Check if required fields are filled
//     if (!formData.fullName) {
//       setValidationErrors((prevErrors) => ({
//         ...prevErrors,
//         fullName: "Vui lòng nhập họ và tên",
//       }));
//       isValid = false;
//     }

//     // Validate phone number format
//     const phoneNumberRegex = /^\d+$/;
//     if (!formData.phoneNumber) {
//       setValidationErrors((prevErrors) => ({
//         ...prevErrors,
//         phoneNumber: "Vui lòng nhập số điện thoại",
//       }));
//       isValid = false;
//     } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
//       setValidationErrors((prevErrors) => ({
//         ...prevErrors,
//         phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
//       }));
//       isValid = false;
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       setValidationErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "Vui lòng nhập email",
//       }));
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       setValidationErrors((prevErrors) => ({
//         ...prevErrors,
//         email: "Địa chỉ email không hợp lệ",
//       }));
//       isValid = false;
//     }

//     if (!isValid) {
//       return; // Stop submission if validation fails
//     }

//     try {
//       // Updated API call to save to Google Sheets via Node.js backend
//       const response = await fetch(
//         "https://viettin-server-uzq2.onrender.com/api/appraisal-request", // Update with your backend API URL
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         alert(
//           "Chúng tôi đã nhận thông tin và liên hệ bạn trong thời gian sớm nhất!"
//         );
//         setFormData({
//           fullName: "",
//           phoneNumber: "",
//           email: "",
//           requestDetails: "",
//         });
//         onOpenChange(); // Close the modal after successful submission
//       } else {
//         alert("Error submitting request.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <section className="relative">
//         <div className="relative w-full h-screen overflow-hidden bg-gray-800">
//           {/* Background image */}
//           <img
//             src={background}
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover opacity-70"
//           />

//           {/* Overlay for background darkening effect */}
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//           {/* Animated Text */}
//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
//             <Parallax speed={10}>
//               <h1 className="font-['Quicksand'] text-2xl md:text-4xl pb-10 text-white animate-fade-in-up">
//                 <strong>VIETTIN VALUATION </strong> luôn giữ vững và nâng cao
//                 chất lượng dịch vụ <br/> trên chặng đường phát triển
//               </h1>
//             </Parallax>
//             <Parallax speed={-5} opacity={[0.7, 1]} translateY={[20, 0]}>
//               <Button
//                 color="primary"
//                 endContent={<IoArrowForwardCircleOutline />}
//                 className="font-['Quicksand'] mt-4"
//                 onClick={onOpen} // Show form on button click
//               >
//                 Gửi yêu cầu thẩm định giá
//               </Button>

//               {/* The Modal component */}
//               <Modal
//                 className="h-[29rem]"
//                 isOpen={isOpen}
//                 onOpenChange={onOpenChange}
//               >
//                 <ModalContent>
//                   {(onClose) => (
//                     <>
//                       <ModalHeader className="font-['Quicksand'] text-xl font-semibold">
//                         Gửi yêu cầu thẩm định giá
//                       </ModalHeader>
//                       <ModalBody>
//                         <form
//                           onSubmit={handleSubmit}
//                           className="flex flex-col gap-4"
//                         >
//                           <Input
//                             label="Họ và tên *"
//                             fullWidth
//                             required
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             errorMessage={validationErrors.fullName}
//                           />
//                           <Input
//                             label="Số điện thoại *"
//                             fullWidth
//                             required
//                             name="phoneNumber"
//                             inputMode="numeric"
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             errorMessage={validationErrors.phoneNumber}
//                           />
//                           <Input
//                             label="Email *"
//                             type="email"
//                             fullWidth
//                             required
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             errorMessage={validationErrors.email}
//                           />
//                           <Input
//                             label="Nội dung yêu cầu"
//                             fullWidth
//                             name="requestDetails"
//                             value={formData.requestDetails}
//                             onChange={handleChange}
//                           />
//                           <Button
//                             color="primary"
//                             className="mt-4 font-['Quicksand'] w-full text-bold text-white"
//                             type="submit"
//                           >
//                             Gửi yêu cầu
//                           </Button>
//                         </form>
//                       </ModalBody>
//                     </>
//                   )}
//                 </ModalContent>
//               </Modal>
//             </Parallax>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Thank;


import React, { useState } from "react";

// Import assets
import background from "../../../assets/thank/Paper-background.jpg";

// Import components
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Parallax } from "react-scroll-parallax";

function Thank() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Updated formData state to include new fields
  const [formData, setFormData] = useState({
    fullName: "", // "Họ và tên"
    phoneNumber: "", // "Số điện thoại"
    email: "",
    requestDetails: "", // "Nội dung yêu cầu"
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    requestDetails: "", // Add error for requestDetails
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle submit loading

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation errors before new submission
    setValidationErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
      requestDetails: "", // Reset requestDetails error
    });

    let isValid = true; // Flag to track overall form validity

    // Check if required fields are filled
    if (!formData.fullName) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Vui lòng nhập họ và tên",
      }));
      isValid = false;
    }

    // Validate phone number format
    const phoneNumberRegex = /^\d+$/;
    if (!formData.phoneNumber) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Vui lòng nhập số điện thoại",
      }));
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
      }));
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Vui lòng nhập email",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Địa chỉ email không hợp lệ",
      }));
      isValid = false;
    }

    // Validate request details
    if (!formData.requestDetails) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        requestDetails: "Vui lòng nhập nội dung yêu cầu",
      }));
      isValid = false;
    }

    if (!isValid) {
      return; // Stop submission if validation fails
    }

    // Set submitting state to true
    setIsSubmitting(true);

    try {
      // Updated API call to save to Google Sheets via Node.js backend
      const response = await fetch(
        "https://viettin-server-uzq2.onrender.com/api/appraisal-request", // Update with your backend API URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert(
          "Chúng tôi đã nhận thông tin và liên hệ bạn trong thời gian sớm nhất!"
        );
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          requestDetails: "",
        });
        onOpenChange(); // Close the modal after successful submission
      } else {
        alert("Error submitting request.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false); // Set submitting state to false after the submission attempt
    }
  };

  return (
    <div>
      <section className="relative">
        <div className="relative w-full h-screen overflow-hidden bg-gray-800">
          {/* Background image */}
          <img
            src={background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />

          {/* Overlay for background darkening effect */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Animated Text */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <Parallax speed={10}>
              <h1 className="font-['Quicksand'] text-2xl md:text-4xl pb-10 text-white animate-fade-in-up">
                <strong>VIETTIN VALUATION </strong> luôn giữ vững và nâng cao
                chất lượng dịch vụ <br /> trên chặng đường phát triển
              </h1>
            </Parallax>
            <Parallax speed={-5} opacity={[0.7, 1]} translateY={[20, 0]}>
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                className="font-['Quicksand'] mt-4"
                onClick={onOpen} // Show form on button click
              >
                Gửi yêu cầu thẩm định giá
              </Button>

              {/* The Modal component */}
              <Modal
                className="h-[29rem]"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader
                        id="modal-title"
                        className="font-['Quicksand'] text-xl font-semibold"
                      >
                        Gửi yêu cầu thẩm định giá
                      </ModalHeader>
                      <ModalBody id="modal-description">
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-4"
                        >
                          <Input
                            label="Họ và tên *"
                            fullWidth
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            errorMessage={validationErrors.fullName}
                          />
                          <Input
                            label="Số điện thoại *"
                            fullWidth
                            required
                            name="phoneNumber"
                            inputMode="numeric"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            errorMessage={validationErrors.phoneNumber}
                          />
                          <Input
                            label="Email *"
                            type="email"
                            fullWidth
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            errorMessage={validationErrors.email}
                          />
                          <Input
                            label="Nội dung yêu cầu"
                            fullWidth
                            name="requestDetails"
                            value={formData.requestDetails}
                            onChange={handleChange}
                            errorMessage={validationErrors.requestDetails}
                          />
                          <Button
                            color="primary"
                            className="mt-4 font-['Quicksand'] w-full text-bold text-white"
                            type="submit"
                            disabled={isSubmitting} // Disable button while submitting
                          >
                            {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
                          </Button>
                        </form>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </Parallax>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thank;
