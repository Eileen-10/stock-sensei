import React, {useState} from "react";

import inv_data from "../data/inv_overview.json";
import inv_data_updated from "../data/inv_overview_updated.json";

import forecast_dashboard from "../data/forecast_dashboard.json";
import forecast_dashboard_updated from "../data/forecast_dashboard_updated.json";

export default function Dashboard(){

    const [ioData, setIOData] = useState(inv_data);
    const [forecastData, setForecastData] = useState(forecast_dashboard);

    const updateData = () =>{
        setIOData(inv_data_updated);
        setForecastData(forecast_dashboard_updated);
    }

    return(
        <div>
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <p className="font-bold text-3xl mb-8">Inventory Overview</p>
                    <button onClick={()=>{updateData()}}>Click Me</button>
                </div>
                <div className="grid grid-cols-3 gap-12">
                    {ioData.map((inv)=>(
                        <div className="bg-white rounded-xl flex flex-col p-4">
                            <div className="flex mb-8 justify-between">
                                <div className="flex-flex-col">
                                    <p className="font-bold">{inv.name}</p>
                                    <p className="">{inv.category}</p>
                                </div>
                                <div className="flex">
                                    {inv.stock < 30 ? <img src="https://cdn-icons-png.flaticon.com/128/9392/9392685.png" width={50} height={10} className="scale-50"></img> : <img className="hidden"></img> }
                                    {inv.stock > 30 && inv.stock < 50 ? <img src="https://cdn-icons-png.flaticon.com/128/6897/6897039.png" width={50} height={10} className="scale-50"></img> : <img className="hidden"></img> }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">Stock: {inv.stock}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col mt-8">
                <div className="flex justify-between">
                    <p className="font-bold text-3xl mb-8">Forecast</p>
                </div>
                <div className="flex flex-col">
                    {forecastData.map((forecast)=>(
                        <div className="bg-white rounded-lg flex p-2 justify-between items-center mb-8">
                            <div className="flex items-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/426/426833.png" className="scale-[0.40]"></img>
                                <p className="text-xl font-bold mr-2">{forecast.name}</p>
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">{forecast.category}</span>
                            </div>
                            <div className="mr-4">
                                <p className="font-bold text-lg">Units to buy : {forecast.uta}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}