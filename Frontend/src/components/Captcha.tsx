import { type THeaderProps } from "./Header";

export const Captcha: React.FC<THeaderProps> = ({
  stage,
  checked,
  setChecked,
}) => {
  const handleChecked = () => {
    setChecked(true);
  };

  return (
    <div className="border-1 border-[#797979] flex mt-8 h-16 w-80 items-center">
      <div className="flex items-center mr-5">
        {stage === 2 || stage === 4 ? (
          <div
            className={`${
              stage === 4
                ? "border-t-transparent w-7 h-7 border-4 rounded-full ml-3 mr-3 border-gray-100 animate-spin"
                : "ml-3 mr-3 border-4 rounded-full border-dotted w-7 h-7 border-green-500 custom-spinner"
            }`}
          ></div>
        ) : (
          <div className="flex justify-center">
            <input
              className="cursor-pointer checked:inset-shadow-amber-400 checked:shadow-amber-300 checked:animate-ping transition-all rounded-sm w-6 h-6 ml-4 mr-3 appearance-none border-2 border-[#D9D9D9]"
              type="checkbox"
              onClick={handleChecked}
            />
            <span
              className={`${
                !checked && "hidden"
              } absolute text-amber-600 ml-1 text-md font-extrabold animate-ping`}
            >
              ✓
            </span>
          </div>
        )}
        <p className={`${stage === 2 && "mr-20"}`}>
          {stage === 2 ? "Verifying..." : "Verify you are human"}
        </p>
      </div>
      <div>
        <img
          className="w-20 mb-1"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4b%2FCloudflare_Logo.svg%2F2560px-Cloudflare_Logo.svg.png&f=1&nofb=1&ipt=1cdd23d13004791266fcae541d6cf4caf65c656936d08323c9d83d171cd2f1f6"
          alt="cloudflare icon"
        />
        <div className="flex text-[10px] font-medium underline justify-around items-center text-zinc-400">
          <a href="" className="underline">
            Privacy
          </a>
          <img
            className="w-[2px] h-[2px]"
            src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/cmg/1"
            alt=""
            title="Widget containing a CloudFlare security challenge"
          />
          <a href="" className="underline">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
};
