import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { Country } from "../../types/Country.types";
import Text from "../../components/texts/Text";
import { splitWordIfTwoOrMoreSyllables } from "../../utils/splitWordIfTwoOrMoreSyllables";
import Spinner from "../../components/spinners/Spinner";

const Dashboard = () => {
  const [dataCountry, setDataCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/Country/Colombia`;
        const response = await getData<Country>(url);

        if (response.status === 200) {
          setDataCountry(response.data);
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
          <div className="flex flex-col gap-3 items-center w-full p-4">
            {dataCountry && (
              <>
                <Text
                  design="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  text={dataCountry.name}
                />
                <img
                  className="w-1/6"
                  src={dataCountry.flags[0]}
                  alt={dataCountry.name}
                />
                <Text
                  design="text-xl px-8 text-justify"
                  text={dataCountry.description}
                />
                <div className="w-full py-2 flex flex-col items-center justify-center">
                  <Text
                    design="text-3xl font-bold text-primary mb-2"
                    text="Additional Information:"
                  />
                  <ul className="w-full py-2 flex flex-wrap justify-center gap-4">
                    {Object.entries(dataCountry)
                      .filter(
                        ([key]) =>
                          key !== "flags" &&
                          key !== "id" &&
                          key !== "name" &&
                          key !== "description"
                      )
                      .map(([key, value]) => (
                        <div
                          className="flex flex-col items-center shadow-md rounded-lg p-4 text-white bg-primary"
                          key={key}
                        >
                          <Text
                            text={splitWordIfTwoOrMoreSyllables(key)}
                            design="text-xl font-bold"
                          />
                          <Text
                            text={
                              Array.isArray(value) ? value.join(", ") : value
                            }
                            design="text-lg"
                          />
                        </div>
                      ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
