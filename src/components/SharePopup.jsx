import Share from "./Share";

function SharePopup() {
  return (
    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-4">
      <div className="bg-grey900 flex items-center px-8 py-4 -mx-8 rounded-xl">
        <Share />
      </div>
      <div className="w-0 h-0 border-x-10 border-x-transparent border-t-10 border-t-grey900 mx-auto"></div>
    </div>
  );
}

export default SharePopup;
