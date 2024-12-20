import StuntingTable from "@/components/stunting/StuntingTable";
import MonthPicker from "@/components/shared/MonthPicker";
import PageHeader from "@/components/shared/pageHeader/PageHeader";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectMonthPicker } from "../store/slice/monthPickerSlice";
import { setLoading } from "../store/slice/dateRangeSlice";
import { stuntingApi } from "../api/stuntingApi";
import topTost from "@/utils/topTost";
import Loading from "@/components/shared/Loading";
import { confirmDelete } from "@/utils/confirmDelete";

const StuntingData = () => {
  const dispatch = useDispatch();
  const { month, year, error, loading } = useSelector(selectMonthPicker);

  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    dispatch(setLoading(true));
    try {
      const stunting = await stuntingApi.findAll(month, year);
      setData(stunting);
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

  const handleDelete = async (id) => {
    const deleted = await confirmDelete(id);
    if (deleted.confirmed) {
      await stuntingApi.delete(id);
      topTost("success", "Data berhasil dihapus");
      fetchData();
    }
    return;
  };

  return (
    <>
      <PageHeader>
        <div className="d-flex align-items-center gap-2">
          <div
            className="position-relative date-picker-field"
            onClick={() => setOpen(!open)}
          >
            <MonthPicker toggleDateRange={open} setToggleDateRange={setOpen} />
          </div>
          <a href="/stunting/add" className="btn btn-primary">
            <FiPlus size={16} className="me-2" />
            <span>Tambah</span>
          </a>
        </div>
      </PageHeader>
      {loading ? (
        <Loading />
      ) : (
        <div className="main-content">
          <div className="row">
            {data && <StuntingTable data={data} handleDelete={handleDelete} />}
          </div>
        </div>
      )}
    </>
  );
};

export default StuntingData;
