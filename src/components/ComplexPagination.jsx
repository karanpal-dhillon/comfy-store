import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const ComplexPagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, search } = location;

  const handlePageChange = (page) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", page);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = (page, activeClass) => {
    return (
      <button
        className={`btn join-item ${activeClass ? "btn-active" : ""}`}
        key={page}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(
      <button
        className="btn join-item"
        key="prev"
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>,
    );
    pageButtons.push(addPageButton(1, page === 1));
    if (page > 2) {
      pageButtons.push(
        <button className="btn join-item" key="dots-1">
          ...
        </button>,
      );
    }
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton(page, true));
    }
    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="btn join-item" key="dots-2">
          ...
        </button>,
      );
    }
    pageButtons.push(addPageButton(pageCount, page === pageCount));
    pageButtons.push(
      <button
        className="btn join-item"
        key="next"
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>,
    );
    return pageButtons;
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">{renderPageButtons()}</div>
    </div>
  );
};

export default ComplexPagination;
