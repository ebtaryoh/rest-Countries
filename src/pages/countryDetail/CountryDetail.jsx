import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../countryDetail/CountryDetail.css";
import Loading from "../../utils/Loading";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getACountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const result = await response.json();
      console.log(result[0].name.common);
      setCountry(result[0]);
      setIsLoading(false);
    };

    setTimeout(() => {
      getACountry();
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  const handleGoBack = () => {
    navigate(-1);
  };
  const languages = object
    .values(country.languages)
    .map((language) => {
      return language;
    })
    .join(",");
  const currencies = country.currencies
    ? object.values(country.currencies)[0].name
    : "No Currency";
  return (
    <div className="country-detail">
      <div className="container text-start py-5 ">
        <button
          onClick={handleGoBack}
          className="px-5 border-0 mb-5 d-flex gap-2 align-items-center rounded-2 bg-elements custom-text-white shadow-lg"
        >
          <FaArrowLeftLong />
          Back
        </button>
        <div className="d-flex flex-column flex-md-row gap-5 ">
          <img
            className="detail-flag"
            src={country.flags.png}
            alt={country.flags.alt}
          />
          <div className="d-flex flex-column gap-4">
            <div className="inner-main d-md-flex align-items-center  gap-5">
              <div>
                <p className=" fw-bold fs-1">{country.name.common}</p>
                <p>
                  <span className="fw-semibold">Native name:</span>
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p>
                  <span className="fw-semibold">Population:</span>
                  {country.population}
                </p>
                <p>
                  <p>
                    <span className=" fw-semibold">Region</span>
                    {country.region}
                  </p>
                  <p>
                    <span className=" fw-semibold">Sub Region:</span>
                    {country.subregion}
                  </p>
                </p>
                <p>
                  <span className=" fw-semibold">Capital:</span>
                  {country.capital ? country.capital : "No Capital"}
                </p>
              </div>
              <div className="other-side">
                <p>
                  <span className=" fw-semibold">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className=" fw-semibold">Currencies:</span>
                  {country.currencies
                    ? object.values(country.counries)[0].name
                    : "Currencies"}
                </p>
                <p>
                  <span className=" fw-semibold">Languages:</span>
                </p>
              </div>
            </div>
            <div className="border-div">
              <p>borders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
