// Basit bir randevu butonu etkileşimi
document.querySelector('.randevu-btn').addEventListener('click', () => {
    alert('Randevu almak için lütfen İletişim sayfasından formu doldurun veya WhatsApp üzerinden iletişime geçin.');
});

// Hızlı erişim butonu etkileşimi
document.querySelector('.hizli-erisim-btn').addEventListener('click', () => {
    window.location.href = '#hakkimda';
});

// Sosyal medya bağlantılarını açma
document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});