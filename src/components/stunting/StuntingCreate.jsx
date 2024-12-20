import { yearList } from "@/utils/dateFilterRange/yearList";
import { useState } from "react";
import { monthList } from "@/utils/dateFilterRange/monthList";
import { FiChevronDown } from "react-icons/fi";
import Input from "../shared/Input";
import { stuntingApi } from "../../api/stuntingApi";
import { useNavigate } from "react-router-dom";
import topTost from "@/utils/topTost";

const StuntingCreateForm = () => {
  const [data, setData] = useState({
    puskesmas: null,
    kecamatan: null,
    jumlah: null,
  });
  const navigate = useNavigate();
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2024);
  const [years] = useState(yearList());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const dataFetch = { month: month, year: year, ...data };
      await stuntingApi.create(dataFetch);
      topTost("success", "Success Update Data");

      navigate("/stunting/data");
    } catch (error) {
      topTost("error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (name, value) => {
    // add condition if below zero
    if (value < 0) {
      value = 0;
    }

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="col-lg-12">
          <div className="card stretch stretch-full">
            <div className="card-body general-info">
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <h5 className="fw-bold mb-0 me-4">
                  <span className="d-block mb-2">Form</span>
                  <span className="fs-16 fw-normal text-muted text-truncate-1-line">
                    Penambahan Data Stunting
                  </span>
                </h5>
              </div>
              <div className="mb-5 d-flex gap-3">
                <div>
                  <span className="d-block mb-2">Bulan</span>
                  <div className="position-relative" style={{ width: "150px" }}>
                    <select
                      className="form-control appearance-none pr-4"
                      value={month}
                      onChange={(e) => setMonth(Number(e.target.value))}
                    >
                      {monthList.map((monthOption) => (
                        <option
                          key={monthOption.value}
                          value={monthOption.value}
                        >
                          {monthOption.label}
                        </option>
                      ))}
                    </select>
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y me-3 pointer-events-none"
                      style={{
                        pointerEvents: "none",
                        color: "#6c757d",
                      }}
                    >
                      <FiChevronDown />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="d-block mb-2">Tahun</span>
                  <div className="position-relative" style={{ width: "150px" }}>
                    <select
                      className="form-control appearance-none pr-4"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {years.map((yearOption) => (
                        <option key={yearOption.value} value={yearOption.value}>
                          {yearOption.label}
                        </option>
                      ))}
                    </select>
                    <div
                      className="position-absolute top-50 end-0 translate-middle-y me-3 pointer-events-none"
                      style={{
                        pointerEvents: "none",
                        color: "#6c757d",
                      }}
                    >
                      <FiChevronDown />
                    </div>
                  </div>
                </div>
              </div>
              <Input
                label={"Puskesmas"}
                type="text"
                value={data?.puskesmas}
                setValue={(e) => handleInputChange("puskesmas", e.target.value)}
              />
              <Input
                label={"Kecamatan"}
                type="text"
                value={data?.kecamatan}
                setValue={(e) => handleInputChange("kecamatan", e.target.value)}
              />
              <Input
                label={"Jumlah"}
                type="number"
                value={data?.jumlah}
                setValue={(e) => handleInputChange("jumlah", e.target.value)}
              />
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary col-2 ">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default StuntingCreateForm;
