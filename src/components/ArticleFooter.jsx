import { useState } from "react";
import Share from "./Share";
import SharePopup from "./SharePopup";
import ShareButton from "./ShareButton";

function ArticleFooter() {
  const [share, setShare] = useState(true);

  function handleClick() {
    setShare(!share);
  }

  return (
    <>
      <div className={`${share && "hidden"} sm:block`}>
        <div className="flex items-center mb-4 sm:mb-8">
          <img
            src="images/avatar-michelle.jpg"
            alt="a picture of a woman"
            className="w-10 rounded-full mr-4"
          />
          <div>
            <strong className="pt-6 text-sm font-bold leading-[1.4] text-grey900">
              Michelle Appleton
            </strong>
            <p className="text-sm font-medium leading-[1.4] text-grey400">
              28 Jun 2020
            </p>
          </div>
          <div className="ml-auto">
            <div className="relative">
              <ShareButton
                bgColor={share ? "bg-grey900" : "bg-grey200 hover:bg-grey900"}
                arrowColor={
                  share ? "fill-white" : "fill-grey500 group-hover:fill-white"
                }
                onClick={handleClick}
              />
              {share && <SharePopup />}
            </div>
          </div>
        </div>
      </div>
      {share && (
        <div className="sm:hidden bg-grey900 -mx-8 flex px-8 py-4 items-center rounded-b-xl">
          <Share />
          <div className="ml-auto pl-4">
            <ShareButton
              bgColor={"bg-grey500 hover:bg-grey200"}
              arrowColor={"fill-white group-hover:fill-grey500"}
              onClick={handleClick}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ArticleFooter;
