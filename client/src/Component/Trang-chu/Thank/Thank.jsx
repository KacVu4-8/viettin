// import { useState } from "react";

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
//   const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     requestDetails: "",
//   });

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setValidationErrors({
//       fullName: "",
//       phoneNumber: "",
//       email: "",
//     });

//     let isValid = true;

//     if (!formData.fullName) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         fullName: "Vui lòng nhập họ và tên",
//       }));
//       isValid = false;
//     }

//     const phoneNumberRegex = /^\d+$/;
//     if (!formData.phoneNumber) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         phoneNumber: "Vui lòng nhập số điện thoại",
//       }));
//       isValid = false;
//     } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
//       }));
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         email: "Vui lòng nhập email",
//       }));
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       setValidationErrors((prev) => ({
//         ...prev,
//         email: "Địa chỉ email không hợp lệ",
//       }));
//       isValid = false;
//     }

//     if (!isValid) return;

//     try {
//       const response = await fetch(
//         "https://viettin-server-uzq2.onrender.com/api/appraisal-request",
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
//           "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
//         );
//         setFormData({
//           fullName: "",
//           phoneNumber: "",
//           email: "",
//           requestDetails: "",
//         });
//         onClose();
//       } else {
//         alert(
//           "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.");
//     }
//   };

//   return (
//     <div>
//       <section className="relative">
//         <div className="relative w-full h-screen overflow-hidden bg-gray-800">
//           <img
//             src={background}
//             alt="Background"
//             className="absolute inset-0 w-full h-full object-cover opacity-70"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//           <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
//             <Parallax speed={10}>
//               <h1 className="font-['Quicksand'] text-2xl md:text-4xl pb-10 text-white animate-fade-in-up">
//                 <strong>VIETTIN VALUATION </strong> luôn giữ vững và nâng cao
//                 chất lượng dịch vụ <br /> trên chặng đường phát triển
//               </h1>
//             </Parallax>

//             <Parallax speed={-5} opacity={[0.7, 1]} translateY={[20, 0]}>
//               <Button
//                 color="primary"
//                 endContent={<IoArrowForwardCircleOutline />}
//                 className="font-['Quicksand'] mt-4"
//                 onClick={onOpen}
//               >
//                 Gửi yêu cầu thẩm định giá
//               </Button>

//               <Modal
//                 isOpen={isOpen}
//                 onOpenChange={onOpenChange}
//                 onClose={onClose}
//                 className="max-h-[90vh] overflow-y-auto"
//               >
//                 <ModalContent>
//                   {() => (
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
//                             name="fullName"
//                             value={formData.fullName}
//                             onChange={handleChange}
//                             errorMessage={validationErrors.fullName}
//                           />
//                           <Input
//                             label="Số điện thoại *"
//                             fullWidth
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

import { useState } from "react";

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
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    requestDetails: "",
  });

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
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
    });

    let isValid = true;

    if (!formData.fullName) {
      setValidationErrors((prev) => ({
        ...prev,
        fullName: "Vui lòng nhập họ và tên",
      }));
      isValid = false;
    }

    const phoneNumberRegex = /^\d+$/;
    if (!formData.phoneNumber) {
      setValidationErrors((prev) => ({
        ...prev,
        phoneNumber: "Vui lòng nhập số điện thoại",
      }));
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationErrors((prev) => ({
        ...prev,
        phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
      }));
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Vui lòng nhập email",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Địa chỉ email không hợp lệ",
      }));
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await fetch(
        "https://viettin-official.onrender.com/api/appraisal-request",
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
          "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
        );
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          requestDetails: "",
        });
        onClose();
      } else {
        alert(
          "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.");
    }
  };

  return (
    <div>
      <section className="relative">
        <div className="relative w-full h-screen overflow-hidden bg-gray-800">
          <img
            src={background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

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
                onClick={onOpen}
              >
                Gửi yêu cầu thẩm định giá
              </Button>

              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                className="max-h-[90vh] overflow-y-auto"
              >
                <ModalContent>
                  {() => (
                    <>
                      <ModalHeader className="font-['Quicksand'] text-xl font-semibold">
                        Gửi yêu cầu thẩm định giá
                      </ModalHeader>
                      <ModalBody>
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-4"
                        >
                          <Input
                            label="Họ và tên *"
                            fullWidth
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            errorMessage={validationErrors.fullName}
                          />
                          <Input
                            label="Số điện thoại *"
                            fullWidth
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
                          />
                          <Button
                            color="primary"
                            className="mt-4 font-['Quicksand'] w-full text-bold text-white"
                            type="submit"
                          >
                            Gửi yêu cầu
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
