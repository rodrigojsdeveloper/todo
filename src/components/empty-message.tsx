export const EmptyMessage = () => {
  return (
    <div className="mx-auto mt-10 flex w-full flex-col items-center gap-y-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect width="56" height="56" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_43_191" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_43_191"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>

      <div className="flex flex-col items-center text-center text-gray-300">
        <p className="text-base font-bold">
          You don{"'"}t have tasks registered yet
        </p>
        <p className="text-sm font-normal">
          Create tasks and organize your to-do items
        </p>
      </div>
    </div>
  )
}