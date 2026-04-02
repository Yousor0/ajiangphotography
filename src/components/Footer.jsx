import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center sm:justify-start pt-10 pb-3 w-full mx-auto px-6 md:px-20  mb-20">
        <SocialMediaIcon className="opacity-60" />
      </div>
    </footer>
  );
}
