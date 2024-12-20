import axios from "axios";

export const PendaftaranPendudukApi = {
  getData: async (month, year) => {
    try {
      const response = await axios.get("/api/pendaftaran-penduduk", {
        params: { month: month, year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  updateData: async (data) => {
    try {
      const response = await axios.post("/api/pendaftaran-penduduk", data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
