import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackage = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    const gallery = [
      "https://i.ibb.co/2MrRGSQ/barishal.jpg",
      "https://i.ibb.co/v4zz32y/cox-s-bazar.jpg",
      "https://i.ibb.co/k1gcGdp/dhaka-sadarghat.jpg",
      "https://i.ibb.co/1T5CfM6/kuakata-sea.jpg",
      "https://i.ibb.co/ggb20sB/sajek.jpg",
      "https://i.ibb.co/5x8s5X5/sundarban.jpg",
    ];
    const dayOne = {
      title: "Day 1 - Cultural Delights",
      description: "Enjoy a day of boating and scenic views in Bangladesh",
    };
    const dayTwo = {
      title: "Day 1 - Exploring Bangladesh",
      description:
        "Immerse yourself in the local culture and attractions of this place",
    };
    const title = data.title;
    const type = data.type.toLowerCase();
    const price = parseFloat(data.price);
    const imageFile = { image: data?.imageFile[0] };
    // Upload image to imgbb
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const packageInfo = {
        photo: res.data.data.display_url,
        title,
        type,
        price,
        gallery,
        dayOne,
        dayTwo,
      };
      axiosSecure.post("/addPackages", packageInfo).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${title} added successfully`,
            icon: "success",
          });
          reset();
        }
      });
    }
  };

  return (
    <div data-aos="fade-left" className="bg-[#f6f8f9] p-10 rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Package Title*</span>
          </div>
          <input
            type="text"
            name="title"
            {...register("title")}
            placeholder="package title"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Tour Type*</span>
          </div>
          <input
            type="text"
            name="type"
            {...register("type")}
            placeholder="tour type"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Price*</span>
          </div>
          <input
            type="number"
            name="price"
            {...register("price")}
            placeholder="Price"
            className="input input-bordered w-full "
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Image File</span>
          </div>
          <input
            type="file"
            name="imageFile"
            {...register("imageFile")}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn btn-block bg-yellow text-white">
          Add Package
        </button>
      </form>
    </div>
  );
};

export default AddPackage;
