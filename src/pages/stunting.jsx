import PageHeader from "@/components/shared/pageHeader/PageHeader";
import PageHeaderMonth from "@/components/shared/pageHeader/PageHeaderMonth";
import StuntingOverview from "@/components/StuntingOverview";
import StuntingChart from "@/components/widgetsCharts/stuntingChart";
import TrenStuntingChart from "@/components/widgetsCharts/TrenStuntingChart";
import { useDispatch, useSelector } from "react-redux";
import { selectMonthPicker, setLoading } from "../store/slice/monthPickerSlice";
import { useEffect, useState } from "react";
import { stuntingApi } from "../api/stuntingApi";
import Loading from "@/components/shared/Loading";

const Stunting = () => {
  const dispatch = useDispatch();
  const { month, year, error, loading } = useSelector(selectMonthPicker);

  const [data, setData] = useState({
    overview: null,
    detail: null,
    tren: null,
  });

  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      const [overviewData, detailData, trenData] = await Promise.all([
        stuntingApi.getOverview(month, year),
        stuntingApi.getDetail(month, year),
        stuntingApi.getTren(year),
      ]);
      setData({
        overview: overviewData,
        detail: detailData,
        tren: trenData,
      });
    } catch (error) {
      dispatch(setError(error.message));
      console.error("error fetching data", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, [month, year]);

  if (error) {
    topTost("error", error.message);
  }

  return (
    <>
      <PageHeader>
        <PageHeaderMonth />
      </PageHeader>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-content">
          <div className="row">
            {data.overview && <StuntingOverview data={data.overview} />}
            {data.detail && (
              <>
                <StuntingChart
                  title={"Puskesmas"}
                  data={data.detail.puskesmas}
                />
                <StuntingChart
                  title={"Kecamatan"}
                  data={data.detail.kecamatan}
                />
              </>
            )}
            {data.tren && (
              <TrenStuntingChart title={"Trend Stunting"} data={data.tren} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Stunting;
