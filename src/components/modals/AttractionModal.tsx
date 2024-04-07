import { useEffect, useState } from "react";
import { Attraction } from "../../models/Attraction";
import Image from "../images/Image";
import Text from "../texts/Text";
import { getData } from "../../services/getData";
import { Country } from "../../models/Country";
import { Department } from "../../models/Departament";

type Props = {
  attraction: Attraction | null;
};

const AttractionModal = ({ attraction }: Props) => {
  const [city, setCity] = useState<Country | null>();
  const [department, setDepartment] = useState<Department | null>();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/City/${attraction?.cityId}`;
        const response = await getData<Country>(url);

        if (response.status === 200) {
          setCity(response.data);
        } else {
          console.error("Error al obtener los datos:", response.message);
        }
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    getCountry();
  }, [attraction]);

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/City/${city?.departmentId}`;
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

    getDepartment();
  }, [city]);

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Text text={attraction?.name} design="text-3xl font-bold text-primary" />
      <div className="w-full flex flex-col lg:flex-row gap-6 h-full overflow-hidden overflow-y-auto lg:overflow-hidden">
        <Image
          design="w-full lg:w-1/2 mb-4 h-full object-cover"
          img={attraction?.images[0]}
        />
        <div className="flex flex-col gap-4">
          {city?.name && (
            <div className="flex gap-2">
              <Text text={"City:"} design="text-xl font-bold text-primary" />
              <Text text={city.name} design="text-xl" />
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

          {attraction?.description && (
            <div className="flex flex-col gap-2">
              <Text
                text={"Descripción:"}
                design="text-xl font-bold text-primary"
              />
              <Text text={attraction.description} design="text-xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionModal;
