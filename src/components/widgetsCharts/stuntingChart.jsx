import useCardTitleActions from "@/hooks/useCardTitleActions";
import CardLoader from "@/components/shared/CardLoader";
import CardHeader from "@/components/shared/CardHeader";
import ReactApexChart from "react-apexcharts";
import { StuntingChartOptions } from "@/utils/chartsLogic/stuntingChartOptions";

const StuntingChart = ({ title, data }) => {
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
  const chartOptions = StuntingChartOptions(data);

  return (
    <div className="col-xxl-6">
      <div
        className={`card stretch stretch-full leads-overview ${
          isExpanded ? "card-expand" : ""
        } ${refreshKey ? "card-loading" : ""}`}
      >
        <CardHeader
          title={title}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />

        <div className="card-body custom-card-action">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            height={315}
          />
          {/* <div className="row g-2 pt-2">
            {data.map(({ nama_proses, jumlah }, index) => {
              return (
                <div key={index} className="col-4">
                  <Link
                    href="#"
                    className="p-2 hstack gap-2 rounded border border-dashed border-gray-5"
                  >
                    <span>
                      {nama_proses}
                      <span className="fs-10 text-muted ms-1">({jumlah})</span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div> */}
        </div>
        <CardLoader refreshKey={refreshKey} />
      </div>
    </div>
  );
};

export default StuntingChart;
