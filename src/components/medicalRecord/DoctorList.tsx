import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../contexts/DoctorContext/DoctorContext';
import { TDoctor } from '../../models/types/entities/TDoctor';

const DoctorList: React.FC = () => {
  const { doctors, loading, error, fetchDoctors } = useContext(DoctorContext);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (doctors.length === 0) {
    return <div>No doctors available</div>;
  }

  return (
    
    <div>
      <h1>Doctor List</h1>
      <ul>
        {doctors.map((doctor: TDoctor, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {doctor.nombreMedico}</p>
            <p><strong>Specialization:</strong> {doctor.nombreEspecialidad}</p>
            <p><strong>Working Hours:</strong> {doctor.atencionDesde} - {doctor.atencionHasta}</p>
            <p><strong>Location:</strong> {doctor.ubicacionConsulta}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;
