import React from 'react';
import { useRouter } from 'next/router';
import { ReactCountryFlag } from "react-country-flag";
import style from './css/CountryFlag.module.css';

const CountryFlag = () => {
    const {locale} = useRouter();
    const countryCode = locale.slice(-2);
  return (
    <div className={style.CountryFlag}>
        <ReactCountryFlag
                countryCode={countryCode}
                svg
                style={{
                    width: '2.9rem',
                    height: '2.3rem',
                }}
                title={countryCode}
            />
    </div>
  );
};

export default CountryFlag;