import { Captcha } from "./Captcha";

export type THeaderProps = {
  stage: number;
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const Header: React.FC<THeaderProps> = ({
  stage,
  checked,
  setChecked,
}) => {
  return (
    <div className="flex flex-col mt-34">
      <h1 className="text-[38px] font-medium">unknowncheats.me</h1>
      <p className="mt-1 text-[23px] font-medium">
        {stage === 3
          ? "Verify you are human by completing the action below."
          : "Verifying you are human. This may take a few seconds."}
      </p>
      {stage === 1 ? (
        <div className="w-8 h-8 mt-10 ml-3 border-5 border-[#999999] border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <Captcha stage={stage} checked={checked} setChecked={setChecked} />
      )}
      <p className="mt-10 text-2xl text-wrap">
        unknowncheats.me needs to review the security of your connection before
        proceeding.
      </p>
    </div>
  );
};
