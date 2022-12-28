import "./statistical.css";
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import PiaChart from "../../../../components/charts/pieChart/pieChart";
import BarChart from "../../../../components/charts/barChart/barChart";

export default function Statistical() {
  const ManufactureFactory = "Cơ sở sản xuất";
  const ServiceCenter = "Trung tâm bảo hành";
  const Distributor = "Đại lý";
  return (
    <div className="statistical">
      <Sidebar />
      <div className="wrapper">
        <Navbar />
        <div className="mainStatistical">
          <PiaChart />
          <BarChart {...{ title: Distributor }} />
          <BarChart {...{ title: ManufactureFactory }} />
          <BarChart {...{ title: ServiceCenter }} />
        </div>
      </div>
    </div>
  );
}
