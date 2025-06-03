function Share() {
  return (
    <>
      <strong className="uppercase mr-6 text-sm font-medium leading-[1.4] tracking-[0.25rem] text-grey400">
        Share
      </strong>
      <div className="flex gap-4">
        <img
          src="images/icon-facebook.svg"
          alt="Facebook App Icon"
          className="max-w-5 max-h-5 cursor-pointer"
        />
        <img
          src="images/icon-twitter.svg"
          alt="Twitter App Icon"
          className="max-w-5 max-h-5 cursor-pointer"
        />
        <img
          src="images/icon-pinterest.svg"
          alt="Pinterest App Icon"
          className="max-w-5 max-h-5 cursor-pointer"
        />
      </div>
    </>
  );
}

export default Share;
