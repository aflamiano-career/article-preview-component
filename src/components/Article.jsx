import ArticleFooter from "./ArticleFooter";

function Article() {
  return (
    <article className="m-6 sm:mx-20 sm:max-w-3xl rounded-xl bg-white">
      <div className="flex flex-col sm:flex-row rounded-[inherit]">
        <div className="sm:min-w-2/5 rounded-[inherit] rounded-b-none sm:rounded-bl-xl sm:rounded-r-none overflow-hidden">
          <img
            src="images/drawers.jpg"
            alt="An image of a green drawer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-8 pt-8">
          <h2 className="text-xl leading-[1.3] font-bold text-grey900">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p className="py-6 text-sm font-medium leading-[1.4] text-grey500">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <ArticleFooter />
        </div>
      </div>
    </article>
  );
}

export default Article;
