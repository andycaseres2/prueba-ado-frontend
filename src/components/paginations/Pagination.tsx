import ButtonChildren from "../buttons/ButtonChildren";
import ArrowFromPrev from "../../assets/Icons/ArrowFromPrev";
import ArrowFromNext from "../../assets/Icons/ArrowFromNext";
import ArrowDropPrev from "../../assets/Icons/ArrowDropPrev";
import ArrowDropNext from "../../assets/Icons/ArrowDropNext";

type Props = {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number | null;
};

const Pagination = ({ setCurrentPage, currentPage, totalPages }: Props) => {
  const pagesToShow = 5;

  const goToPrev = () => {
    const newPage = Math.max(currentPage - 1, 1);
    setCurrentPage(newPage);
  };

  const goToNext = () => {
    const newPage = Math.min(currentPage + 1, totalPages || 1);
    setCurrentPage(newPage);
  };

  const handleClick = (page: number) => setCurrentPage(page);

  const jumpToPage = (increment: number) => {
    const newPage = Math.max(
      Math.min(currentPage + increment, totalPages || 1),
      1
    );
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (currentPage <= 5) {
      startPage = 1;
      endPage = Math.min(pagesToShow, totalPages || 1);
    } else if (currentPage + 2 >= totalPages!) {
      startPage = Math.max(totalPages! - pagesToShow + 1, 1);
      endPage = totalPages!;
    } else {
      const remainder = (currentPage - 1) % pagesToShow;
      startPage = currentPage - remainder;
      endPage = startPage + pagesToShow - 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive =
        currentPage === i
          ? "bg-primary text-white font-bold"
          : "border border-primary bg-transparent";
      pageNumbers.push(
        <span
          key={i}
          className={`cursor-pointer h-7 w-7 flex justify-center items-center mr-2 rounded ${isActive}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-2">
      <ButtonChildren action={() => jumpToPage(-5)}>
        <ArrowFromPrev />
      </ButtonChildren>
      <ButtonChildren action={goToPrev}>
        <ArrowDropPrev />
      </ButtonChildren>
      {renderPageNumbers()}
      <ButtonChildren action={goToNext}>
        <ArrowDropNext />
      </ButtonChildren>
      <ButtonChildren action={() => jumpToPage(5)}>
        <ArrowFromNext />
      </ButtonChildren>
    </div>
  );
};

export default Pagination;
