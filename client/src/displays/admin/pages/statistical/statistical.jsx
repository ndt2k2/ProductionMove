import "./statistical.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import BarChart from "../../../../components/charts/barChart/barChart";

export default function Statistical() {
  const ManufactureFactory = "Cơ sở sản xuất";
  const ServiceCenter = "Trung tâm bảo hành";
  const Distributor = "Đại lý";
  const productStatis = "Thống kê theo trạng thái của tất cả sản phẩm";

  const dataKeyProduct = "grossProduct";
  const dataKeyProductLine = "grossProductLine";

  const dataProduct = [
    { name: "New", grossProduct: 50 },
    { name: "Sold", grossProduct: 20 },
    { name: "warrant", grossProduct: 5 },
    { name: "warranted", grossProduct: 10 },
    { name: "TimeOut", grossProduct: 10 },
    { name: "Recall", grossProduct: 7 },
  ];

  const dataManufacture = [
    { name: "Lexus", grossProductLine: 50 },
    { name: "Toyota", grossProductLine: 20 },
    { name: "Honda", grossProductLine: 5 },
    { name: "Suzuki", grossProductLine: 10 },
    { name: "Rolls-royce", grossProductLine: 10 },
  ];
  const dataDistributor = [];
  const dataServiceCenter = [];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      grossProduct: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 7400,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="statistical">
      <Sidebar />
      <div className="wrapper">
        <Navbar />
        <div className="mainStatistical">
          <BarChart
            {...{
              title: productStatis,
              data: dataProduct,
              dataKey: dataKeyProduct,
            }}
          />
          <BarChart
            {...{
              title: Distributor,
              data: dataManufacture,
              dataKey: dataKeyProductLine,
            }}
          />
          <BarChart
            {...{
              title: ManufactureFactory,
              data: dataManufacture,
              dataKey: dataKeyProductLine,
            }}
          />
          <BarChart
            {...{
              title: ServiceCenter,
              data: dataManufacture,
              dataKey: dataKeyProductLine,
            }}
          />
        </div>
      </div>
    </div>
  );
}
