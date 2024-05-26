import { useEffect, useState } from 'react';
import { getReservations } from '../../services/api';

export const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getReservations();
        setReservations(data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="reservation-list card">
      <h2>Reservations</h2>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id}>
              <p>Date: {reservation.date}</p>
              <p>Time: {reservation.time}</p>
              <p>Pax: {reservation.pax}</p>
              <p>Status: {reservation.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};