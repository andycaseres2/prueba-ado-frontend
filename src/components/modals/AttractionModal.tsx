import { useEffect, useState } from "react";
import { Attraction } from "../../models/Attraction";
import { formatNumberWithAutoLocale } from "../../utils/formatNumberWithAutoLocale";
import Image from "../images/Image";
import Text from "../texts/Text";
import { getData } from "../../services/getData";
import { Department } from "../../models/Departament";

type Props = {
  attraction: Attraction | null;
};

const AttractionModal = ({ attraction }: Props) => {
  const [department, setDepartment] = useState<Department | null>();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const url = `https://api-colombia.com/api/v1/Department/${attraction?.city?.departmentId}`;
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
  }, []);

  console.log("department", department);
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Text text={attraction?.name} design="text-3xl font-bold text-primary" />
      <div className="w-full flex gap-6 h-full">
        <Image design="w-1/2 h-full object-cover" img={attraction?.images[0]} />
        <div className="flex flex-col gap-4">
          {attraction?.city?.name && (
            <div className="flex gap-2">
              <Text text={"Ciudad:"} design="text-xl font-bold text-primary" />
              <Text text={attraction.city.name} design="text-xl" />
            </div>
          )}

          {attraction?.city?.population && (
            <div className="flex gap-2">
              <Text
                text={"Population:"}
                design="text-xl font-bold text-primary"
              />
              <Text
                text={formatNumberWithAutoLocale(attraction.city.population)}
                design="text-xl"
              />
            </div>
          )}

          {attraction?.city?.surface && (
            <div className="flex gap-2">
              <Text text={"Surface:"} design="text-xl font-bold text-primary" />
              <Text
                text={formatNumberWithAutoLocale(attraction.city.surface)}
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
