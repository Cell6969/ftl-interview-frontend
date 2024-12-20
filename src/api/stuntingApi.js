import axios from "axios";

export const stuntingApi = {
  getOverview: async (month, year) => {
    try {
      const response = await axios.get("/api/stunting/overview", {
        params: { month: month, year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getDetail: async (month, year) => {
    try {
      const response = await axios.get("/api/stunting/detail", {
        params: { month: month, year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  getTren: async (year) => {
    try {
      const response = await axios.get("/api/stunting/tren", {
        params: { year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  // CRUD
  findAll: async (month, year) => {
    try {
      const response = await axios.get("/api/stunting", {
        params: { month: month, year: year },
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await axios.post("/api/stunting", {
        puskesmas: data.puskesmas,
        kecamatan: data.kecamatan,
        jumlah: Number(data.jumlah),
        month: Number(data.month),
        year: Number(data.year),
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const response = await axios.get(`/api/stunting/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  update: async (id, data) => {
    try {
      const response = await axios.put(`/api/stunting/${id}`, {
        puskesmas: data.puskesmas,
        kecamatan: data.kecamatan,
        jumlah: Number(data.jumlah),
        month: Number(data.month),
        year: Number(data.year),
      });
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      const response = await axios.delete(`/api/stunting/${id}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
