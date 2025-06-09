document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('new-booking-form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const data = {
        rooms_id: form.rooms_id.value,
        user_id: form.user_id.value,
        start_time: form.start_time.value,
        end_time: form.end_time.value
      };

      try {
        const response = await fetch('/bookings/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          window.location.href = '/bookings';
        } else {
          const result = await response.json();
          alert(result.error || 'Erro ao criar reserva');
        }
      } catch (err) {
        alert('Erro ao criar reserva');
      }
    });
  }
});