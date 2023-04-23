import { useParams } from "react-router-dom";

function PaymentStatus() {
  const { id } = useParams();
  const successImage =
    "https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif";
  const failedImage =
    "https://cdn.dribbble.com/users/107759/screenshots/4594246/15_payment-error.gif";
  return (
    <>
      <div className="payment-status-container">
        <div className="payment-status-wrappper">
          <img
            src={id === "success" ? successImage : failedImage}
            alt=""
            srcset=""
          />
          <h4 className="text-center">
            {id === "success" ? "Payment Successfull" : "Payment Failed"}
          </h4>
        </div>
      </div>
    </>
  );
}
export { PaymentStatus };
