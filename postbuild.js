import { readFile, writeFile, unlink } from 'fs/promises';
import { resolve } from 'path';

const htmlPath = resolve('../../public/bookings-build/index.html');
const bladePath = resolve('../../resources/views/chat.blade.php');

async function convertToBlade() {
//   try {
    let data = await readFile(htmlPath, 'utf8');

    // تبدیل تگ‌های <script> و <link> به دایرکتیوهای Vite در Blade
    data = data.toString().replaceAll('chat','bookings-build');
    //   .replace(/<script type="module" src="\/booking-chats\/assets\/(.*?)"><\/script>/g, `<script type="module" src="/bookings-build/assets/$1"></script>`)
    //   .replace(/<link rel="stylesheet" href="\/booking-chats\/assets\/(.*?)">/g, `<link rel="stylesheet" href="/bookings-build/assets/$1">`)
    //   .replace('<div id="root"></div>', '<div id="root"></div>');

    // ذخیره فایل Blade
    await writeFile(bladePath, data);
    console.log(data);

    // حذف index.html
    await unlink(htmlPath);
//   } catch (err) {
//     console.error('Error:', err);
//   }
}

convertToBlade();