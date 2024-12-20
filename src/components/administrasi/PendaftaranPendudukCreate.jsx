import Input from "@/components/shared/Input";
import SelectDropdown from "../shared/SelectDropdown";
import { useEffect, useState } from "react";
import { yearList } from "@/utils/dateFilterRange/yearList";
import { monthList } from "@/utils/dateFilterRange/monthList";
import { PendaftaranPendudukApi } from "../../api/pendaftaranPendudukApi";
import Loading from "../shared/Loading";
import { FiChevronDown } from "react-icons/fi"; // Import the down arrow icon
import topTost from "@/utils/topTost";

const PendaftaranPendudukCreate = () => {
  const [data, setData] = useState({
    id: null,
    kartu_keluarga_wni: null,
    biodata_wni: null,
    kartu_identitas_anak_wni: null,
    perpindahan_wni: null,
    perekaman_ktp_el_wni: null,
    pencetakan_ktp_el_wni: null,
    kartu_keluarga_orang_asing: null,
    surat_keterangan_tempat_tinggal: null,
    biodata_orang_asing: null,
    perpindahan_orang_asing: null,
  });
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2024);
  const [years] = useState(yearList());
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const dataPenduduk = await PendaftaranPendudukApi.getData(month, year);
      setData(dataPenduduk);
      if (dataPenduduk === null) {
        topTost("warning", "Data belum terbuat");
      }
    } catch (error) {
      console.error("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [month, year]);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      const dataFetch = { month: month, year: year, ...data };
      await PendaftaranPendudukApi.updateData(dataFetch);
      topTost("success", "Success Update Data");
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
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="col-lg-12">
            <div className="card stretch stretch-full">
              <div className="card-body general-info">
                <div className="mb-5 d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0 me-4">
                    <span className="d-block mb-2">Form</span>
                    <span className="fs-16 fw-normal text-muted text-truncate-1-line">
                      Pendaftaran Penduduk
                    </span>
                  </h5>
                </div>
                <div className="mb-5 d-flex gap-3">
                  <div>
                    <span className="d-block mb-2">Bulan</span>
                    <div
                      className="position-relative"
                      style={{ width: "150px" }}
                    >
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
                    <span className="d-block mb-2 gap-3">Tahun</span>
                    <div
                      className="position-relative"
                      style={{ width: "150px" }}
                    >
                      <select
                        className="form-control appearance-none pr-4"
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                      >
                        {years.map((yearOption) => (
                          <option
                            key={yearOption.value}
                            value={yearOption.value}
                          >
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
                  icon="feather-user"
                  label={"Kartu Keluarga WNI"}
                  type="number"
                  name={"kartu_keluarga_wni"}
                  value={data?.kartu_keluarga_wni}
                  setValue={(e) =>
                    handleInputChange("kartu_keluarga_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-mail"
                  label={"Biodata WNI"}
                  name={"biodata_wni"}
                  type="number"
                  value={data?.biodata_wni}
                  setValue={(e) =>
                    handleInputChange("biodata_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Kartu Identitas Anak WNI"}
                  name={"kartu_identitas_anak_wni"}
                  type="number"
                  value={data?.kartu_identitas_anak_wni}
                  setValue={(e) =>
                    handleInputChange(
                      "kartu_identitas_anak_wni",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Perpindahan WNI"}
                  name={"perpindahan_wni"}
                  type="number"
                  value={data?.perpindahan_wni}
                  setValue={(e) =>
                    handleInputChange("perpindahan_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Perekaman KTP-el WNI"}
                  name={"perekaman_ktp_el_wni"}
                  type="number"
                  value={data?.perekaman_ktp_el_wni}
                  setValue={(e) =>
                    handleInputChange("perekaman_ktp_el_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Pencatakan KTP-el WNI"}
                  name={"pencetakan_ktp_el_wni"}
                  type="number"
                  value={data?.pencetakan_ktp_el_wni}
                  setValue={(e) =>
                    handleInputChange("pencetakan_ktp_el_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Kartu Keluarga Orang Asing"}
                  name={"kartu_keluarga_orang_asing"}
                  type="number"
                  value={data?.kartu_keluarga_orang_asing}
                  setValue={(e) =>
                    handleInputChange(
                      "kartu_keluarga_orang_asing",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Surat Keterangan Tempat Tinggal"}
                  name={"surat_keterangan_tempat_tinggal"}
                  type="number"
                  value={data?.surat_keterangan_tempat_tinggal}
                  setValue={(e) =>
                    handleInputChange(
                      "surat_keterangan_tempat_tinggal",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Biodata Orang Asing"}
                  name={"biodata_orang_asing"}
                  type="number"
                  value={data?.biodata_orang_asing}
                  setValue={(e) =>
                    handleInputChange("biodata_orang_asing", e.target.value)
                  }
                />
                <Input
                  icon="feather-link-2"
                  label={"Perpindahan Orang Asing"}
                  name={"perpindahan_orang_asing"}
                  value={data?.perpindahan_orang_asing}
                  setValue={(e) =>
                    handleInputChange("perpindahan_orang_asing", e.target.value)
                  }
                  type="number"
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
      )}
    </>
  );
};

export default PendaftaranPendudukCreate;
