import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BookingForm = ({ viewPackage }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { price } = viewPackage;

  const {
    register,
    handleSubmit,
    // reset,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const name = data.name || user?.displayName;
    const email = data.email || user?.email;
    const photo = data.phot || user?.photoURL;
    const guide = data.guide;
    const date = data.date;
    const PackagePrice = parseFloat(data.price || price);

    const bookingInfo = { email, name, photo, guide, date, PackagePrice };
    console.log(bookingInfo);
    const res = await axiosSecure.post("/user/bookings", bookingInfo);
    if (res.data?.insertedId) {
      Swal.fire({
        title: "Booking Successful!",
        text: "Your booking is confirmed",
        icon: "success",
        // TODO: navigate to booking page
      });
    }
  };

  const guideNames = [
    "Alice Johnson",
    "Bob Smith",
    "Elena Rodriguez",
    "Alice Johnson",
    "Bob Smith",
    "Elena Rodriguez",
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#f6f8f9] p-10 w-3/4 mx-auto rounded-xl space-y-4"
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Name</span>
        </div>
        <input
          type="name"
          defaultValue={user?.displayName}
          name="name"
          {...register("name")}
          placeholder="name"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          defaultValue={user?.email}
          name="email"
          {...register("email")}
          placeholder="email"
          className="input input-bordered w-full"
        />
      </label>
      {/* Date and Guide */}
      <div className="flex items-center justify-center gap-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text flex items-center">Date*</span>
          </div>
          <input
            required
            type="date"
            name="date"
            defaultValue={() => new Date()}
            {...register("date")}
            placeholder="date"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text flex items-center">Guide</span>
          </div>
          <select
            name="guide"
            {...register("guide")}
            className="select select-bordered w-full "
          >
            <option disabled>Chose your favorite one</option>
            {guideNames.map((name, index) => (
              <option key={index}>{name}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text flex items-center">
            Price
            <TbCurrencyTaka />
          </span>
        </div>
        <input
          type="number"
          defaultValue={price}
          name="price"
          {...register("price")}
          placeholder="price"
          className="input input-bordered w-full"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Photo URL</span>
        </div>
        <input
          type="text"
          defaultValue={user?.photoURL}
          name="photo"
          {...register("photo")}
          placeholder="photo"
          className="input input-bordered w-full"
        />
      </label>
      <div className="flex justify-center  ">
        {user?.email ? (
          <button className="btn btn-outline mt-6 px-10 bg-yellow text-base-100">
            Book Now
          </button>
        ) : (
          <button
            disabled
            className="btn btn-outline mt-6 px-10 bg-yellow text-base-100"
          >
            Book Now
          </button>
        )}
      </div>
    </form>
  );
};

export default BookingForm;
