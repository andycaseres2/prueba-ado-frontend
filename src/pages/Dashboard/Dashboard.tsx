import { useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { Country } from "../../models/Country";
import Text from "../../components/texts/Text";
import Spinner from "../../components/spinners/Spinner";
import { formatNumberWithAutoLocale } from "../../utils/formatNumberWithAutoLocale";
import { Department } from "../../models/Departament";
import Button from "../../components/buttons/Button";
import SearchInput from "../../components/inputs/SearchInput";

const Dashboard = () => {
  const [dataCity, setDataCity] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [citySearch, setCitySearch] = useState<string>("Bogota");
  const [department, setDepartment] = useState<Department | null>();

  const getCountry = async () => {
    try {
      const url = `https://api-colombia.com/api/v1/City/search/${citySearch}`;
      const response = await getData<Country[]>(url);

      if (response.status === 200) {
        if (response.data && response.data.length > 0) {
          setDataCity(response.data[0]);
        } else {
          console.error("No se encontraron datos para la ciudad:", citySearch);
        }
      } else {
        console.error("Error al obtener los datos:", response.message);
      }
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/Department/${dataCity?.departmentId}`;
        const response = await getData<Department>(url);

        if (response.status === 200) {
          setDepartment(response.data);
        } else {
          console.error("Error al obtener los datos:", response.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    getCountry();
  }, [dataCity]);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner design="w-20 h-20 text-primary" />
        </div>
      ) : (
        <div className="flex w-full overflow-hidden overflow-y-auto h-full mt-4">
          <div className="flex flex-col gap-3 items-center w-full p-4">
            <div className="flex gap-8 w-full lg:w-1/2 justify-center py-4">
              <SearchInput
                action={getCountry}
                search={citySearch}
                setSearch={setCitySearch}
              />
              <Button text="Search" action={getCountry} />
            </div>

            <div className="w-full justify-start px-2 lg:px-8 pb-10 flex flex-col gap-2">
              <Text
                design="text-4xl lg:text-5xl font-bold text-primary mb-2"
                text={dataCity?.name}
              />
              {dataCity?.population && (
                <div className="flex gap-2">
                  <Text
                    text={"Population:"}
                    design="text-xl font-bold text-primary"
                  />
                  <Text
                    design="text-xl text-justify"
                    text={formatNumberWithAutoLocale(dataCity?.population)}
                  />
                </div>
              )}

              {dataCity?.surface && (
                <div className="flex gap-2">
                  <Text
                    text={"Surface:"}
                    design="text-xl font-bold text-primary"
                  />
                  <Text
                    text={formatNumberWithAutoLocale(dataCity.surface)}
                    design="text-xl"
                  />
                </div>
              )}

              {department?.name && (
                <div className="flex gap-2">
                  <Text
                    text={"Department:"}
                    design="text-xl font-bold text-primary"
                  />
                  <Text text={department.name} design="text-xl" />
                </div>
              )}

              {dataCity?.description && (
                <div className="flex gap-2">
                  <Text
                    text={"Postal Code:"}
                    design="text-xl font-bold text-primary"
                  />
                  <Text text={dataCity?.postalCode} design="text-xl" />
                </div>
              )}

              {dataCity?.description && (
                <div className="flex flex-col ">
                  <Text
                    text={"Descripción:"}
                    design="text-xl font-bold text-primary"
                  />
                  <Text text={dataCity.description} design="text-xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
