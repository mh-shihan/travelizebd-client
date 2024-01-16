import { CiLock } from "react-icons/ci";
import { GiPayMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { GoGift } from "react-icons/go";

const AboutIconCollection = () => {
  return (
    <div className="grid grid-cols-2   gap-6 mt-4  ">
      {/* First Item */}
      <div className="flex  items-center gap-2 transition-all hover:scale-105 cursor-pointer">
        <h3 className="text-yellow text-5xl">
          <CiLock />
        </h3>
        <div>
          <p className="text-lg font-bold text-black">Security Payment</p>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex  items-center gap-2 transition-all hover:scale-105 cursor-pointer ">
        <h3 className="text-yellow text-5xl">
          <GiPayMoney />
        </h3>
        <div>
          <p className="text-lg font-bold text-black  ">Money Back</p>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Third Item */}
      <div className="flex  items-center gap-2 transition-all hover:scale-105 cursor-pointer">
        <h3 className="text-yellow text-5xl">
          <BiSupport />
        </h3>
        <div>
          <p className="text-lg font-bold text-black">Online Support</p>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* Fourth Item */}
      <div className="flex  items-center gap-2 transition-all hover:scale-105 cursor-pointer">
        <h3 className="text-yellow text-5xl">
          <GoGift />
        </h3>
        <div>
          <p className="text-lg font-bold text-black">Gift Voucher</p>
          <p className="text-sm">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutIconCollection;
