// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { toast } from "react-toastify";
// import { useContext, useEffect, useState } from "react";
// import { pizzaContext } from "../App";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// export function InventoryUpdateForm({ filteredInventoryItems }) {
//   const { serverApi } = useContext(pizzaContext);

//   const [isApiLoded, setIsApiLoaded] = useState(false);
//   const navigate = useNavigate();
//   const updatedIninitialValues = {};
//   filteredInventoryItems.forEach((item) => {
//     updatedIninitialValues[item.name] = item.stock;
//   });
//   const updatedValidationSchema = {};
//   filteredInventoryItems.forEach((item) => {
//     updatedValidationSchema[item.name] = yup.string().required();
//   });
//   const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
//     useFormik({
//       initialValues: updatedIninitialValues,
//       enableReinitialize: true,
//       validationSchema: yup.object(updatedValidationSchema),
//       onSubmit: () => {
//         // console.log(values);
//         updateStock(values);
//       },
//     });

//   function updateStock(values) {
//     console.log("update Stock", values);
//     //send put request
//   }
//   // console.log(filteredInventoryItems);
//   return (
//     <>
//       <h3 className="title-small text-center">Invenotry Stock Update Form</h3>
//       <form
//         onSubmit={handleSubmit}
//         className="inventory-stock-update-form form"
//       >
//         <div className="input-elements-container">
//           {filteredInventoryItems.map((item) => {
//             const { name, stock } = item;

//             // console.log(values,name);
//             return (
//               <TextField
//                 id={name}
//                 label={name}
//                 placeholder=" "
//                 type="text"
//                 name={name}
//                 value={values[name]}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 error={touched[name] && Boolean(errors[name])}
//                 helperText={touched[name] && errors[name] ? errors[name] : null}
//               />
//             );
//           })}
//         </div>
//         <Button type="submit" variant="contained">
//           Submit
//         </Button>
//       </form>
//     </>
//   );
// }
