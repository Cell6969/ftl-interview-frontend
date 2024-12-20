import React, { useEffect, useState } from "react";
import PageHeaderDate from "@/components/shared/pageHeader/PageHeaderDate";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import Footer from "@/components/shared/Footer";
import PerizinanOverview from "@/components/PerizinanOverview";
import PerizinanChart from "@/components/widgetsCharts/perizinanProsesChart";
import PerizinanStackChart from "@/components/widgetsCharts/PerizinanStack";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDateRange,
  setError,
  setLoading,
} from "../store/slice/dateRangeSlice";
import topTost from "@/utils/topTost";
import Loading from "@/components/shared/Loading";
import { perizinanApi } from "../api/perizinanApi";

export const Home = () => {
  // add dispatch and get slice of date range
  const dispatch = useDispatch();
  const { startDate, endDate, loading, error } = useSelector(selectDateRange);
  const [data, setData] = useState({
    overviewTask: null,
    detailTask: null,
    overviewJenis: null,
    detailJenis: null,
  });

  // fetch data
  const fetchAllData = async () => {
    dispatch(setLoading(true));
    try {
      const [overviewTask, detailTask, overviewJenis, detailJenis] =
        await Promise.all([
          perizinanApi.getOverviewPerzinanPerTask(startDate, endDate),
          perizinanApi.getDetailsPerizinanPerTask(startDate, endDate),
          perizinanApi.getOverviewPerizinanPerJenis(startDate, endDate),
          perizinanApi.getDetailsPerizinanPerJenis(startDate, endDate),
        ]);
      setData({
        overviewTask: overviewTask,
        detailTask: detailTask,
        overviewJenis: overviewJenis,
        detailJenis: detailJenis,
      });
    } catch (error) {
      dispatch(setError(error.message));
      console.error("error fetching data", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // fetch trigger
  useEffect(() => {
    fetchAllData();
  }, [startDate, endDate]);

  if (error) {
    topTost("error", error.message);
  }

  return (
    <>
      <PageHeader>
        <PageHeaderDate />
      </PageHeader>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-content">
          <div className="row">
            {data.overviewTask && (
              <PerizinanOverview
                title={"Overview Perizinan Per Task"}
                data={data.overviewTask}
              />
            )}

            {data.detailTask && (
              <>
                <PerizinanChart
                  title={"Perizinan Proses"}
                  data={data.detailTask.sedang_proses}
                />
                <PerizinanChart
                  title={"Perizinan Selesai"}
                  data={data.detailTask.selesai_proses}
                />
                <PerizinanChart
                  title={"Perizinan Ditolak"}
                  data={data.detailTask.ditolak}
                />
                <PerizinanChart
                  title={"Perizinan Sampai Pemohon"}
                  data={data.detailTask.sampai_pemohon}
                />
              </>
            )}
            {data.overviewJenis && (
              <PerizinanOverview
                title={"Overview Perizinan Per Jenis"}
                data={data.overviewJenis}
              />
            )}
            {data.detailJenis && (
              <PerizinanStackChart
                title={"Detail Perizinan"}
                data={data.detailJenis}
              />
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Home;
