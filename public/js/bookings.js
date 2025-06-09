const fetchBookings = async () => {
    try {
        const response = await fetch('/api/bookings');
        const bookings = await response.json();
        renderBookings(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
    }
};

const renderBookings = (bookings) => {
    const bookingsList = document.getElementById('bookings-list');
    bookingsList.innerHTML = '';

    bookings.forEach(booking => {
        const bookingItem = document.createElement('li');
        bookingItem.textContent = `Booking ID: ${booking.id}, Room ID: ${booking.rooms_id}, User ID: ${booking.user_id}, Start: ${booking.start_time}, End: ${booking.end_time}`;
        bookingsList.appendChild(bookingItem);
    });
};

const createBooking = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        rooms_id: formData.get('rooms_id'),
        user_id: formData.get('user_id'),
        start_time: formData.get('start_time'),
        end_time: formData.get('end_time')
    };

    try {
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const newBooking = await response.json();
        console.log('Booking created:', newBooking);
        fetchBookings(); // Refresh the list
    } catch (error) {
        console.error('Error creating booking:', error);
    }
};

const updateBooking = async (id, data) => {
    try {
        const response = await fetch(`/api/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const updatedBooking = await response.json();
        console.log('Booking updated:', updatedBooking);
        fetchBookings(); // Refresh the list
    } catch (error) {
        console.error('Error updating booking:', error);
    }
};

const deleteBooking = async (id) => {
    try {
        await fetch(`/api/bookings/${id}`, {
            method: 'DELETE'
        });
        console.log('Booking deleted:', id);
        fetchBookings(); // Refresh the list
    } catch (error) {
        console.error('Error deleting booking:', error);
    }
};

// Initial fetch of bookings when the page loads
document.addEventListener('DOMContentLoaded', fetchBookings);

// Event listener for the create booking form
const createBookingForm = document.getElementById('create-booking-form');
if (createBookingForm) {
    createBookingForm.addEventListener('submit', createBooking);
}