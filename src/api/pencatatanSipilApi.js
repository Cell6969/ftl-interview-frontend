import axios from "axios";

export const PencatatanSipil = {
  getData: async (month, year) => {
    try {
      const response = await axios.get("/api/pencatatan-sipil", {
        params: { month: month, year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  updateData: async (data) => {
    try {
      const response = await axios.post("/api/pencatatan-sipil", data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
