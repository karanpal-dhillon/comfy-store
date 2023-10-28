import { useLoaderData } from "react-router-dom";

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  return (
    <section className="mt-10 text-right">
      <div className="join">
        <button className="btn join-item">Prev</button>
        {Array.from({ length: pageCount }, (_, index) => {
          const pageNo = index + 1;
          return (
            <button
              className={`btn join-item ${pageNo === page ? "btn-active" : ""}`}
              key={index}
            >
              {pageNo}
            </button>
          );
        })}
        <button className="btn join-item">Next</button>
      </div>
    </section>
  );
};

export default PaginationContainer;
