/**
 * ===================================================================
 * file: script.js
 * Deskripsi: Skrip JavaScript untuk meningkatkan interaktivitas dan
 * pengalaman pengguna di website Budaya Lokal.
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // === Konfigurasi Utama ===
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

    /**
     * ## 1. Smooth Scrolling 🚀
     * Menerapkan efek gulir yang halus saat mengklik tautan navigasi.
     */
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Hanya berlaku untuk tautan yang mengarah ke bagian di halaman yang sama
            if (this.hash !== "") {
                e.preventDefault();
                const hash = this.hash;
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Gulir halus ke elemen target
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Kurangi 70px untuk headroom navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /**
     * ## 2. Active Link di Navbar 📍
     * Menyorot tautan navigasi yang sesuai dengan bagian yang sedang dilihat.
     */
    const sections = document.querySelectorAll('section, header');
    const navList = document.querySelectorAll('.navbar-nav .nav-link');

    const setActiveLink = () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Tentukan offset untuk mengaktifkan link sedikit lebih awal
            const offset = 100; 

            if (window.scrollY >= sectionTop - offset && window.scrollY < sectionTop + sectionHeight - offset) {
                current = section.getAttribute('id') || 'hero'; // 'hero' untuk bagian header
            }
        });

        navList.forEach(link => {
            link.classList.remove('active');
            // Cek hash link (hapus '#' dan bandingkan)
            const linkHash = link.getAttribute('href').substring(1); 
            
            if (current === 'hero' && linkHash === '') {
                // Beranda/Active Link untuk Hero Section
                link.classList.add('active');
            } else if (linkHash === current) {
                // Active Link untuk section lainnya
                link.classList.add('active');
            }
        });
    };

    // Panggil saat halaman dimuat dan saat menggulir
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Panggil sekali saat dimuat

    /**
     * ## 3. Efek Hover Card Interaktif ✨
     * Menambahkan efek visual interaktif pada kartu event.
     */
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Ubah warna teks judul saat hover
            const title = card.querySelector('h5');
            if (title) {
                title.style.color = secondaryColor;
                title.style.transition = 'color 0.3s ease';
            }
            // Ubah border tombol saat hover
            const detailBtn = card.querySelector('.btn-detail');
             if (detailBtn) {
                detailBtn.style.boxShadow = `0 0 0 2px ${secondaryColor}`;
            }
        });

        card.addEventListener('mouseleave', () => {
            // Kembalikan warna teks judul
            const title = card.querySelector('h5');
            if (title) {
                title.style.color = primaryColor;
            }
            // Kembalikan border tombol
            const detailBtn = card.querySelector('.btn-detail');
            if (detailBtn) {
                detailBtn.style.boxShadow = 'none';
            }
        });
    });


    /**
     * ## 4. Placeholder: Animasi Saat Scroll (AOS) ⬇️
     * Implementasi AOS sederhana atau integrasi AOS eksternal.
     *
     * CATATAN: Untuk efek AOS yang lebih lengkap, disarankan menggunakan
     * library seperti 'AOS' (Animate On Scroll). Contoh:
     * AOS.init({ duration: 1000, once: true });
     */
    const animateElements = document.querySelectorAll('.event-card, .hero-section h1, .hero-section p');
    
    // Fungsi sederhana untuk menambahkan kelas animasi saat elemen terlihat
    const checkVisibility = () => {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Jika elemen terlihat (sedikit di atas atau di bawah viewport)
            if (rect.top < window.innerHeight - 100 && rect.bottom > 100) {
                 // **Jika menggunakan library AOS:**
                 // el.classList.add('aos-animate');

                 // **Implementasi CSS/JS sederhana (hanya untuk demo):**
                 if (!el.classList.contains('animated-fade-in')) {
                     el.style.opacity = '0';
                     el.style.transform = 'translateY(20px)';
                     setTimeout(() => {
                         el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                         el.style.opacity = '1';
                         el.style.transform = 'translateY(0)';
                         el.classList.add('animated-fade-in'); // Tandai sudah dianimasikan
                     }, 100);
                 }
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility); // Panggil saat dimuat untuk elemen di viewport
    
    // Panggil checkVisibility segera setelah DOMContentLoaded
    checkVisibility();

    // Pastikan Anda menambahkan CSS untuk transisi ini jika menggunakan implementasi sederhana di atas.
    // Contoh di file style.css:
    /* .event-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .event-card.animated-fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    */
});
<script>
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicBtn");

    let isPlaying = false;

    btn.addEventListener("click", () => {
        if (!isPlaying) {
            music.play();
            btn.textContent = "⏸️ Hentikan Musik";
            isPlaying = true;
        } else {
            music.pause();
            btn.textContent = "🎵 Putar Musik";
            isPlaying = false;
        }
    });
</script>
