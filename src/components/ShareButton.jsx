function ShareButton({ bgColor, arrowColor, onClick }) {
  return (
    <button
      className={`group min-w-8 min-h-8 rounded-full relative cursor-pointer ${bgColor}`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="13"
        className={`${arrowColor} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <path d="M15 6.495L8.766 .014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
      </svg>
    </button>
  );
}

export default ShareButton;
