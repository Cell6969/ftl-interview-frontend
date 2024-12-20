import Input from "@/components/shared/Input";
import { yearList } from "@/utils/dateFilterRange/yearList";
import { monthList } from "@/utils/dateFilterRange/monthList";
import { useEffect, useState } from "react";
import { PencatatanSipil } from "../../api/pencatatanSipilApi";
import topTost from "@/utils/topTost";
import { FiChevronDown } from "react-icons/fi";
import Loading from "../shared/Loading";

const PencatatanSipilCreate = () => {
  const [data, setData] = useState({
    id: null,
    akta_kelahiran_wni: null,
    akta_kelahiran_orang_asing: null,
    akta_kelahiran_tanpa_asal_usul: null,
    lahir_mati_wni: null,
    lahir_mati_orang_asing: null,
    bkak: null,
    akta_kematian: null,
    bpkam: null,
    akta_perkawinan: null,
    pembatalan_perkawinan: null,
    bpkak: null,
    akta_perceraian: null,
    pembatalan_perceraian: null,
    bpkac: null,
    perubahan_wna_menjadi_wni: null,
    perubahan_wni_menjadi_wna: null,
    akta_pengesahan_anak: null,
    akta_pengakuan_anak: null,
    bpkasa: null,
    bpkaku: null,
    pembatalan_akta: null,
    perubahan_nama: null,
    perubahan_jenis_kelamin: null,
  });
  const [month, setMonth] = useState(10);
  const [year, setYear] = useState(2024);
  const [years] = useState(yearList());
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const dataSipil = await PencatatanSipil.getData(month, year);
      setData(dataSipil);

      if (dataSipil === null) {
        topTost("warning", "data belum terbuat");
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
      console.log(dataFetch);
      await PencatatanSipil.updateData(dataFetch);
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
                      Pencatatan Sipil
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
                    <span className="d-block mb-2">Tahun</span>
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
                  label={"Akta Kelahiran WNI"}
                  type="number"
                  value={data?.akta_kelahiran_wni}
                  setValue={(e) =>
                    handleInputChange("akta_kelahiran_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Akta Kelahiran Orang Asing"}
                  type="number"
                  value={data?.akta_kelahiran_orang_asing}
                  setValue={(e) =>
                    handleInputChange(
                      "akta_kelahiran_orang_asing",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Akta Kelahiran Tanpa Asal Usul"}
                  type="number"
                  value={data?.akta_kelahiran_tanpa_asal_usul}
                  setValue={(e) =>
                    handleInputChange(
                      "akta_kelahiran_tanpa_asal_usul",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Lahir Mati WNI"}
                  type="number"
                  value={data?.lahir_mati_wni}
                  setValue={(e) =>
                    handleInputChange("lahir_mati_wni", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Lahir Mati Orang Asing"}
                  type="number"
                  value={data?.lahir_mati_orang_asing}
                  setValue={(e) =>
                    handleInputChange("lahir_mati_orang_asing", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"BAKAK"}
                  type="number"
                  value={data?.bkak}
                  setValue={(e) => handleInputChange("bkak", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"Akta Kematian"}
                  type="number"
                  value={data?.akta_kematian}
                  setValue={(e) =>
                    handleInputChange("akta_kematian", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"BPKAM"}
                  type="number"
                  value={data?.bpkam}
                  setValue={(e) => handleInputChange("bpkam", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"Akta Perkawinan"}
                  type="number"
                  value={data?.akta_perkawinan}
                  setValue={(e) =>
                    handleInputChange("akta_perkawinan", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Pembatalan Perkawinan"}
                  type="number"
                  value={data?.pembatalan_perkawinan}
                  setValue={(e) =>
                    handleInputChange("pembatalan_perkawinan", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"BPKAK"}
                  type="number"
                  value={data?.bpkak}
                  setValue={(e) => handleInputChange("bpkak", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"Akta Perceraian"}
                  type="number"
                  value={data?.akta_perceraian}
                  setValue={(e) =>
                    handleInputChange("akta_perceraian", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Pembatalan Perceraian"}
                  type="number"
                  value={data?.pembatalan_perceraian}
                  setValue={(e) =>
                    handleInputChange("pembatalan_perceraian", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"BPKAC"}
                  type="number"
                  value={data?.bpkac}
                  setValue={(e) => handleInputChange("bpkac", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"Perubahan WNA menjadi WNI"}
                  type="number"
                  value={data?.perubahan_wna_menjadi_wni}
                  setValue={(e) =>
                    handleInputChange(
                      "perubahan_wna_menjadi_wni",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Perubahan WNI menjadi WNA"}
                  type="number"
                  value={data?.perubahan_wni_menjadi_wna}
                  setValue={(e) =>
                    handleInputChange(
                      "perubahan_wni_menjadi_wna",
                      e.target.value
                    )
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Akta Pengesahan Anak"}
                  type="number"
                  value={data?.akta_pengesahan_anak}
                  setValue={(e) =>
                    handleInputChange("akta_pengesahan_anak", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Akta Pengakuan Anak"}
                  type="number"
                  value={data?.akta_pengakuan_anak}
                  setValue={(e) =>
                    handleInputChange("akta_pengakuan_anak", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"BPKASA"}
                  type="number"
                  value={data?.bpkasa}
                  setValue={(e) => handleInputChange("bpkasa", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"BPKAKU"}
                  type="number"
                  value={data?.bpkaku}
                  setValue={(e) => handleInputChange("bpkaku", e.target.value)}
                />
                <Input
                  icon="feather-user"
                  label={"Pembatalan Akta"}
                  type="number"
                  value={data?.pembatalan_akta}
                  setValue={(e) =>
                    handleInputChange("pembatalan_akta", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Perubahan Nama"}
                  type="number"
                  value={data?.perubahan_nama}
                  setValue={(e) =>
                    handleInputChange("perubahan_nama", e.target.value)
                  }
                />
                <Input
                  icon="feather-user"
                  label={"Perubahan Jenis Kelamin"}
                  type="number"
                  value={data?.perubahan_jenis_kelamin}
                  setValue={(e) =>
                    handleInputChange("perubahan_jenis_kelamin", e.target.value)
                  }
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

export default PencatatanSipilCreate;
