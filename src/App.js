import { useState } from "react";
import Pagination from "./components/Pagination";
import SelectLimit from "./components/SelectLimit";
import Table from "./components/Table";
import { getLength, getUsers } from "./users";

function App() {
  const [page, setPage] = useState(7);
  const [limit, setLimit] = useState(5);

  let totalPage = Math.ceil(getLength() / limit);
  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }

  function handlePageChange(value) {
    if (value === "&laquo;") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  }

  return (
    <div className="container">
      <h1>Table with Pagination</h1>
      <Table users={getUsers(page, limit)} />
      <div className="pagination-container">
        <SelectLimit onLimitChange={setLimit} />

        <Pagination
          totalPage={totalPage}
          page={pageNo}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
