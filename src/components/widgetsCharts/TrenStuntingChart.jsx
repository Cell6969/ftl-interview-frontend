import React from "react";
import ReactApexChart from "react-apexcharts";
import useCardTitleActions from "@/hooks/useCardTitleActions";
import CardHeader from "@/components/shared/CardHeader";
import { trenStuntingChartOptions } from "@/utils/chartsLogic/trenStuntingChartOptions";

const TrenStuntingChart = ({ title, data }) => {
  const chartOptions = trenStuntingChartOptions(data);
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
  return (
    <div className="col-xxl-12">
      <div
        className={`card stretch stretch-full ${
          isExpanded ? "card-expand" : ""
        } ${refreshKey ? "card-loading" : ""}`}
      >
        <CardHeader
          title={title}
          refresh={handleRefresh}
          remove={handleDelete}
          expanded={handleExpand}
        />
        <div className="card-body custom-card-action p-0">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            height={377}
          />
        </div>
      </div>
    </div>
  );
};

export default TrenStuntingChart;
