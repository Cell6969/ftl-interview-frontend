import axios from "axios";

export const perizinanApi = {
  getOverviewPerzinanPerTask: async (startDate, endDate) => {
    try {
      const response = await axios.get("/api/perizinan/overview-pertask", {
        params: { start_date: startDate, end_date: endDate },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  getDetailsPerizinanPerTask: async (startDate, endDate) => {
    try {
      const response = await axios.get("/api/perizinan/detail-pertask", {
        params: { start_date: startDate, end_date: endDate },
      });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getOverviewPerizinanPerJenis: async (startDate, endDate) => {
    try {
      const response = await axios.get("/api/perizinan/overview-perjenis", {
        params: { start_date: startDate, end_date: endDate },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getDetailsPerizinanPerJenis: async (startDate, endDate) => {
    try {
      const response = await axios.get("/api/perizinan/detail-perjenis", {
        params: { start_date: startDate, end_date: endDate },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
