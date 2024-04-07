import { useEffect, useState } from "react";
import { Attraction } from "../../models/Attraction";
import { getData } from "../../services/getData";
import Spinner from "../../components/spinners/Spinner";
import { splitWordIfTwoOrMoreSyllables } from "../../utils/splitWordIfTwoOrMoreSyllables";
import Text from "../../components/texts/Text";
import Modal from "../../components/modals/Modal";
import AttractionModal from "../../components/modals/AttractionModal";
import Image from "../../components/images/Image";
import Pagination from "./../../components/paginations/Pagination";

const Tourism = () => {
  const [dataAttraction, setDataAttraction] = useState<Attraction[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [currenAttraction, setCurrentAttraction] = useState<Attraction | null>(
    null
  );
  const [modalAttractionOpen, setModalAttractionOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSelectAttraction = (attraction: Attraction) => {
    setCurrentAttraction(attraction);
    setModalAttractionOpen(true);
  };
  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/TouristicAttraction/pagedList?Page=${currentPage}&PageSize=10`;

        const response = await getData<{
          data: Attraction[];
          pageCount: number;
        }>(url);

        if (response.status === 200) {
          console.log("response", response.data);
          setTotalPages(response.data?.pageCount || 1); // Asegúrate de manejar el caso en que pageCount no esté definido
          setDataAttraction(response.data?.data || []);
        } else {
          console.error("Error al obtener los datos:", response.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:");
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, [currentPage]);

  useEffect(() => {
    if (modalAttractionOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalAttractionOpen]);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner design="w-20 h-20 text-primary" />
        </div>
      ) : (
        <>
          <div className="flex w-full overflow-hidden overflow-y-auto h-full mt-4">
            <div className="flex flex-col gap-6 items-center w-full p-4">
              <Text
                text="Tourism"
                design="text-4xl lg:text-5xl font-bold text-primary"
              />
              <div className="w-full flex justify-center flex-wrap gap-8">
                {dataAttraction?.map((attraction) => (
                  <div
                    key={attraction.id}
                    className="p-4 w-80 gap-2 flex flex-col items-center shadow-md hover:scale-105 cursor-pointer transition-all"
                    onClick={() => handleSelectAttraction(attraction)}
                  >
                    <Text
                      text={splitWordIfTwoOrMoreSyllables(attraction.name)}
                      design="text-xl font-bold text-primary text-center"
                    />
                    <Image
                      img={attraction.images[0]}
                      design="w-[80^] h-44 object-cover"
                    />
                  </div>
                ))}
                <div className="w-full flex justify-center lg:justify-end pb-4">
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {modalAttractionOpen && (
        <Modal onClose={() => setModalAttractionOpen(false)}>
          <AttractionModal attraction={currenAttraction} />
        </Modal>
      )}
    </>
  );
};

export default Tourism;
