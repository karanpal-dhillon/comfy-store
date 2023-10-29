import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname, search } = location;

  const handlePageChange = (page) => {
    const params = new URLSearchParams(search);
    params.delete("page");
    if (page > pageCount) {
      page = 1;
    } else if (page < 1) {
      page = pageCount;
    }
    params.append("page", page);
    const url = `${pathname}?${params.toString()}`;
    navigate(url);
  };

  return (
    <section className="mt-10 flex flex-col items-center md:items-end">
      <div className="join">
        <button
          className="btn join-item"
          onClick={() => handlePageChange(page - 1)}
        >
          Prev
        </button>
        {Array.from({ length: pageCount }, (_, index) => {
          const pageNo = index + 1;
          return (
            <button
              onClick={() => handlePageChange(pageNo)}
              className={`btn join-item ${pageNo === page ? "btn-active" : ""}`}
              key={index}
            >
              {pageNo}
            </button>
          );
        })}
        <button
          className="btn join-item"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PaginationContainer;
