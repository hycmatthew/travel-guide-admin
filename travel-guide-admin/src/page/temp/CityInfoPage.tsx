import React from 'react'
import PageBanner, { PageBannerType } from '../../components/PageBanner/PageBanner'
import { Grid } from '@mui/material'
import { SkeletonLogic } from '../../utils/SkeletonLogic';

import './CityInfoPage.scss';
import { MockCityData, MockCityDataType } from '../../data/mockData';

/*
interface CityInfoPageProps {
  params: { city: string }
}
*/
const CityInfoPage = () => {

  return (
    <>
      <div>
        {SkeletonLogic([MockCityData], 1).map(
          (item: MockCityDataType | undefined, index: number) => {
            let temp: PageBannerType | null = null
            if (item !== undefined) {
              temp = {
                header: item.title,
                desc:  "",
                image: item.heroBanner,
              }
            }
            return (
              <Grid item xs={12} key={index}>
                <PageBanner item={temp}></PageBanner>
              </Grid>
            )
          }
        )}
      </div>
      <div className='content-container'>
        <h1>Test</h1>
        <p>{""}</p>
      </div>
    </>
  )
}

export default CityInfoPage
