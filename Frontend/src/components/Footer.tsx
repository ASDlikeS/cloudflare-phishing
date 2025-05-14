export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-5 text-xs">
      <hr className="text-amber-50 w-[90vw]" />
      <p className="mt-3">Ray ID: 93f1ac4a8afbd36d</p>
      <p className="mt-2">
        Performance & security by{" "}
        <a
          className="hover:text-amber-600 transition-all "
          href="https://www.cloudflare.com/?utm_source=challenge&utm_campaign=m"
        >
          Cloudflare
        </a>
      </p>
    </div>
  );
};
