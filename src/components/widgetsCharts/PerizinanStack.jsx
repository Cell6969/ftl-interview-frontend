import useCardTitleActions from "@/hooks/useCardTitleActions";
import { PerizinanStackOptions } from "@/utils/chartsLogic/perizinanStackOptions";
import CardHeader from "@/components/shared/CardHeader";
import ReactApexChart from "react-apexcharts";

const PerizinanStackChart = ({ title, data }) => {
  const {
    refreshKey,
    isRemoved,
    isExpanded,
    handleRefresh,
    handleExpand,
    handleDelete,
  } = useCardTitleActions();

  if (isRemoved) {
    return null;
  }
  const chartOptions = PerizinanStackOptions(data);

  return (
    <div className="col-xxl-12">
      <div className="card stretch stretch-full">
        <CardHeader title={title} />

        <div className="card-body custom-card-action">
          <div className="leads-inquiry-channel">
            <ReactApexChart
              type="bar"
              options={chartOptions}
              series={chartOptions?.series}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerizinanStackChart;
