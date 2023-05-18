const mysql = require('mysql2');

// Bağlantı yapılandırması
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'zubidy'
});

// Bağlantıyı aç
connection.connect((err) => {
    if (err) {
        console.error('Bağlantı hatası:', err);
        return;
    }
    console.log('MySQL veritabanına başarıyla bağlandı.');

    // Sorguyu gerçekleştir
    connection.query('SELECT * FROM kullanici', (err, results) => {
        if (err) {
            console.error('Sorgu hatası:', err);
            return;
        }
        console.log('Sonuçlar:', results);

        // Bağlantıyı kapat
        connection.end((err) => {
            if (err) {
                console.error('Bağlantı kapatma hatası:', err);
                return;
            }
            console.log('MySQL bağlantısı başarıyla kapatıldı.');
        });
    });
});
