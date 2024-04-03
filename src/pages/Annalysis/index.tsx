import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Pie } from "react-chartjs-2";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);
interface DiseaseData {
  [diseaseName: string]: number;
}

interface AnalysisData {
  [yearMonth: string]: {
    [diseaseName: string]: number;
  };
}
// export const data = {
 
// };


export default function Annalysis() {
  const [chartDataData,setChartDataData]=useState<AnalysisData>({})
  const [chartData, setChartData] = useState({
    labels: [],
    plugins: {
      legend: {
        position: "top",
      },
    },
    title: {
      display: true,
      text: "Chart.js Pie Chart",
    },
  
    datasets: [
      {
        label: "Diseases",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          // Add more colors if needed
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  }
  
  )

  useEffect(() => {
    fetch("http://localhost:8080/api/annalysis")
      .then((response) => response.json())
      .then((data: AnalysisData) => {
        // Store the fetched data
        setChartDataData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleChangeYear = (year: string) => {
    setSelectedYear(year);
    setSelectedMonth(""); // Reset selected month
  };

  const handleChangeMonth = (month: string) => {
    setSelectedMonth(month);
  };

  const filterChartData = () => {
    const filteredData = chartDataData[selectedYear + "-" + selectedMonth];
    if (filteredData) {
      const labels: string[] = [];
      const datasetsData: number[] = [];

      for (const diseaseName in filteredData) {
        if (Object.prototype.hasOwnProperty.call(filteredData, diseaseName)) {
          labels.push(diseaseName);
          datasetsData.push(filteredData[diseaseName]);
        }
      }

      setChartData({
        ...chartData,
        labels: labels,
        datasets: [
          {
            ...chartData.datasets[0],
            data: datasetsData,
          },
        ],
      });
    } else {
      // If no data is available for the selected year-month, reset chart data
      setChartData({
        ...chartData,
        labels: [],
        datasets: [
          {
            ...chartData.datasets[0],
            data: [],
          },
        ],
      });
    }
  };

  // Fetch data
  useEffect(() => {
    fetch("http://localhost:8080/api/annalysis")
      .then((response) => response.json())
      .then((data: AnalysisData) => {
        // Store the fetched data
        setChartDataData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Extract years and months from fetched data
  const [years, setYears] = useState<string[]>([]);
  const [months, setMonths] = useState<string[]>([]);

  useEffect(() => {
    if (chartDataData) {
      const yearsSet: Set<string> = new Set();
      const monthsSet: Set<string> = new Set();

      for (const yearMonth in chartDataData) {
        if (Object.prototype.hasOwnProperty.call(chartDataData, yearMonth)) {
          const [year, month] = yearMonth.split("-");
          yearsSet.add(year);
          monthsSet.add(month);
        }
      }

      setYears(Array.from(yearsSet).sort());
      setMonths(Array.from(monthsSet).sort());
    }
  }, [chartDataData]);
  return (
    <>
    <div  className="flex m-0 p-0  mb-16 space-x-0  border border-solid border-blue font-Montserrat md:flex-row  gap-4 w-full h-full  px-6 py-3 border-none shadow-none  flex-col">
      <div
        
        className="flex flex-col   gap-4 w-full md:w-1/2 rounded-none md:flex-row  items-center "
      >
        <div className=" rounded-lg bg-cardBGColor  p-5 text-white-500">
          <div className="flex flex-row   items-center justify-start gap-4 mb-4">

            <Square3Stack3DIcon className="h-12 w-12 text-indigo-500" />

            <Typography variant="h4" className="text-greenMain ">
              Disease Distribution in Nairobi
            </Typography>
          </div>
          <Typography
            variant="small"
            color="white"
            className=" md:max-w-lg md:text-white text-gray-500 text-base font-light leading-relaxed mb-4 "
          >
            Explore an Visualise the distribution of tomato diseases among
            farmers in Nairobi with our interactive pie chart. This
            visualization showcases the prevalence of different diseases based
            on predictions made by farmers in the Nairobi region. Each segment
            of the pie chart represents a specific disease, allowing you to
            quickly identify Tomato disease Outbreaks therefore making informed
            decision. Gain valuable insights into the agricultural landscape,
            make informed decisions, and take proactive measures to address
            prevalent diseases. The pie chart simplifies complex data, making it
            easy for farmers to understand and respond effectively to the
            challenges faced in their tomato plantations.
          </Typography>
        </div>
      </div>
      <CardBody
        className=" md:max-h-[500px] md:w-1/2  w-full
           grid place-items-center px-2"
      >
        <div>desease data </div>
        <div>
        <select value={selectedYear} onChange={(e) => handleChangeYear(e.target.value)}>
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select value={selectedMonth} onChange={(e) => handleChangeMonth(e.target.value)}>
          <option value="">Select Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <button onClick={filterChartData}>Apply Filter</button>
      </div>
        <Pie data={chartData} />;
      </CardBody>
    </div>
    </>
  );
}
