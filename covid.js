import React, { useEffect,useState } from 'react';
import "./covid.css";


const Covid = () =>{

    const [data,setData] = useState([]);
    const getCovidData = async ()=>{
       
       try {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        //console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        
       } catch (error) {
          console.log(error);
       }
    }

    useEffect(()=>{
          getCovidData();
    },[]);
  
    return (
      <div className='container'>
            <div className='row'>
                  <div className='text-center pt-3'>
                             <h1>🔴 <span className='text-white'>Live Covid Tracker</span></h1>
                  </div>
            </div>
           <div className='row p-5'>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Our Country</span>
                    <h5 className='card-title'>INDIA</h5>
                   
                    
                    </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Total Recovered</span>
                    <h5 className='card-title'>{data.recovered}</h5>
                    
                    
                    </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Total Confirmed</span>
                    <h5 className='card-title'>{data.confirmed}</h5>
                    
                    
                    </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Total deaths</span>
                    <h5 className='card-title'>{data.deaths}</h5>
                   
                    
                    </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Total Active</span>
                    <h5 className='card-title'>{data.active}</h5>
                    
                    
                    </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='card'>
                    
                    <div className='card-body text-center'>
                        <span>Last Updated</span>
                    <h5 className='card-title'>{data.lastupdatedtime}</h5>
                    
                    
                    </div>
                </div>
              </div>
           </div>
      </div>
    )

}

export default Covid;