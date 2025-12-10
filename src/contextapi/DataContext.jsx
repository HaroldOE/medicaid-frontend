// src/context/DataContext.jsx
import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const API = import.meta.env.VITE_API_URL;

export const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [inventory, setInventory] = useState([]);

  const fetchData = async (endpoint, setter) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/${endpoint}`, {
        headers: { Authorization: `Bearer ${user?.token}` }, // if using JWT
      });
      const data = await res.json();
      setter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createRecord = async (endpoint, body) => {
    const res = await fetch(`${API}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  };

  const uploadExcel = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${API}/api/data/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data;
  };

  const downloadExcel = async () => {
    const res = await fetch(`${API}/api/data/download`);
    if (!res.ok) throw new Error("Export failed");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `MediChain_Export_${
      new Date().toISOString().split("T")[0]
    }.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // src/contextapi/DataContext.jsx — add these inside DataProvider

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/inventory`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setInventory(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyConsultations = async () => {
    setLoading(true);
    try {
      const token = user?.token;
      const res = await fetch(`${API}/api/consultations/my-consultations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setConsultations(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <DataContext.Provider
      value={{
        patients,
        doctors,
        consultations,
        appointments,
        loading,
        error,
        inventory,
        setError,
        fetchData,
        createRecord,
        uploadExcel,
        downloadExcel,
        setPatients,
        setDoctors,
        setConsultations,
        setAppointments,
        fetchInventory,
        fetchMyConsultations,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
