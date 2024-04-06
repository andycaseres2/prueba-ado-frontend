import { useEffect, useState } from "react";
import { Attraction } from "../../types/Attraction";
import { getData } from "../../services/getData";
import Spinner from "../../components/spinners/Spinner";
import { splitWordIfTwoOrMoreSyllables } from "../../utils/splitWordIfTwoOrMoreSyllables";
import Text from "../../components/texts/Text";

const Tourism = () => {
  const [dataAttraction, setDataAttraction] = useState<Attraction[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/TouristicAttraction
`;
        const response = await getData<Attraction[]>(url);

        if (response.status === 200) {
          setDataAttraction(response.data);
        } else {
          console.error("Error al obtener los datos:", response.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };

    getCountry();
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner design="w-20 h-20 text-primary" />
        </div>
      ) : (
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
                  className="p-4 w-80 gap-2 flex flex-col items-center shadow-md"
                >
                  <Text
                    text={splitWordIfTwoOrMoreSyllables(attraction.name)}
                    design="text-xl font-bold text-primary text-center"
                  />
                  <img
                    className="w-[80^] h-44 object-cover"
                    src={attraction.images[0]}
                    alt={attraction.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tourism;
