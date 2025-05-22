"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col gap-4 sm:flex-row items-center justify-between mt-6 text-sm text-gray-500">
      <p className="text-center sm:text-left">
        Showing {startItem}–{endItem} from{" "}
        <span className="font-medium text-black">{totalItems}</span> data
      </p>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-2 py-1 text-gray-500 hover:text-black disabled:text-gray-300"
        >
          &lt;
        </button>

        <div className="hidden sm:flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-md text-sm border border-gray-300 ${
                currentPage === page
                  ? "bg-[#3F83F8] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <div className="sm:hidden text-sm font-medium px-2">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 text-gray-500 hover:text-black disabled:text-gray-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
